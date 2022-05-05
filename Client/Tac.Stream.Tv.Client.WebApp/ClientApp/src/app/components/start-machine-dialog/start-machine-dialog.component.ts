import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-start-machine-dialog',
  templateUrl: './start-machine-dialog.component.html',
  styleUrls: ['./start-machine-dialog.component.scss']
})
export class StartMachineDialogComponent implements OnInit {

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  turnOn() {
    this._http.get("/api/machine-manager/turnOn")
      .subscribe(() => EMPTY);
  }
}
