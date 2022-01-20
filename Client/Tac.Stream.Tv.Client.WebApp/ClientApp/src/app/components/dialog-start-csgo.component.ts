import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { environment } from "../../environments/environment";

@Component({
  selector: 'dialog-start-csgo',
  templateUrl: 'dialog-start-csgo.component.html',
  styleUrls: ["./dialog-start-csgo.component.scss"]
})
export class DialogStartCsGoComponent {
  public ip: string = "";

  constructor(
    public dialogRef: MatDialogRef<DialogStartCsGoComponent>,
    private http: HttpClient
  ) { }

  onClickOk(): void {
    this.dialogRef.close();

    this.http.get(environment.apiUrl + "/counter-strike/start?ip=" + this.ip)
      .subscribe(() => EMPTY);
  }
}