import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { webSocket } from "rxjs/webSocket";
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { environment } from "../../../environments/environment";


interface INotificationPreview {
  Previews: any;
  PreviewScene: string;
  CurrentScene: string;
}

@Component({
  selector: 'dialog-change-scene',
  templateUrl: 'change-scene-dialog.component.html',
  styleUrls: ["./change-scene-dialog.component.scss"]
})
export class ChangeSceneDialogComponent {
  public previews: any;
  public previewSceneImage: string = "";
  public selectedScene: string = "";

  constructor(
    public dialogRef: MatDialogRef<ChangeSceneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { initialImage: string, options: string[], selected: string, remoteIp: string },
    private http: HttpClient
  ) {
    this.previewSceneImage = data.initialImage;
    this.selectedScene = data.selected;

    var preview = webSocket<INotificationPreview>("ws://" + this.removeHttp(data.remoteIp) + 'notification/preview/subscribe');

    preview.subscribe(
      msg => {
        if (msg.Previews)
          this.previews = msg.Previews;
      },
      err => console.log(err)
    );
  }

  selectScene(scene: string) {
    if (scene == this.selectedScene) {
      this.selectedScene = "";

      return;
    }

    this.selectedScene = scene;
    this.select(scene);
  }

  select(scene: any) {
    this.http.get(this.data.remoteIp + "api/obs/change-preview-scene?scene=" + scene)
      .subscribe(() => EMPTY);
  }

  isSelected(value: string) {
    return value === this.data.selected;
  }

  onClickOk(): void {
    this.dialogRef.close();
    this.http.get(this.data.remoteIp + "api/obs/change-current-scene?scene=" + this.selectedScene)
      .subscribe(() => EMPTY);
  }

  removeHttp(url?: string | null) {
    if (url) {
      return url.replace(/^http?:\/\//, '');
    }

    console.error("URL INVALID");
    return "";
  }
}
