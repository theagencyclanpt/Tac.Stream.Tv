import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'csgo-start-dialog',
  templateUrl: 'csgo-start-dialog.component.html',
  styleUrls: ["./csgo-start-dialog.component.scss"]
})
export class CsgoStartDialogComponent {
  public ip: string = "";

  constructor(
    public dialogRef: MatDialogRef<CsgoStartDialogComponent>,
    private http: HttpClient
  ) { }

  onClickOk(): void {
    this.dialogRef.close();

    this.http.get(environment.apiUrl + "/counter-strike/start?ip=" + this.ip)
      .subscribe(() => EMPTY);
  }
}
