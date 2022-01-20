import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { webSocket } from "rxjs/webSocket";
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { environment } from "../../environments/environment";


interface INotificationPreview {
  PreviewScene: string;
  CurrentScene: string;
}

const preview = webSocket<INotificationPreview>(environment.notificationWebSocket.preview);

@Component({
  selector: 'dialog-change-scene',
  templateUrl: 'dialog-change-scene.component.html',
  styleUrls: ["./dialog-change-scene.component.scss"]
})
export class DialogChangeSceneComponent {
  public previewSceneImage: string = "";
  public selectedOption: string = "";

  constructor(
    public dialogRef: MatDialogRef<DialogChangeSceneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { initialImage: string, options: string[], selected: string },
    private http: HttpClient
  ) {
    this.previewSceneImage = data.initialImage;
    this.selectedOption = data.selected;

    preview.subscribe(
      msg => {
        this.previewSceneImage = msg.PreviewScene;
      },
      err => console.log(err)
    );
  }

  select(scene: any) {
    this.http.get(environment.apiUrl + "/obs/change-preview-scene?scene=" + scene)
      .subscribe(() => EMPTY);
  }

  isSelected(value: string) {
    return value === this.data.selected;
  }

  onClickOk(): void {
    this.dialogRef.close();
    this.http.get(environment.apiUrl + "/obs/change-current-scene?scene=" + this.selectedOption)
      .subscribe(() => EMPTY);
  }
}