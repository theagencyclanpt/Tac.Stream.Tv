import { Component, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { delayWhen, EMPTY, retry, retryWhen, tap, timer } from 'rxjs';
import { ChangeSceneDialogComponent } from './components/change-scene-dialog/change-scene-dialog.component';
import { CsgoStartDialogComponent } from './components/start-csgo-dialog/csgo-start-dialog.component';
import { StartMachineDialogComponent } from "./components/start-machine-dialog/start-machine-dialog.component";
import { environment } from "../environments/environment";
import {
  INotificationPreview,
  MachineState,
  ObsStateType,
  IClientState,
  IObsState,
  CounterStikeGameStateType,
  CounterStikeGameState,
  IGlobalState,
  IRemoteIp
} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public currentSceneImage: string = "";
  public previewSceneImage: string = "";
  public machineState: MachineState = MachineState.Off;

  private _remoteIp?: string | null;
  private previewSocket$: WebSocketSubject<INotificationPreview> | undefined;
  private stateSocket$: WebSocketSubject<IGlobalState> | undefined;
  private clientSocket$: WebSocketSubject<IClientState> | undefined;

  public loaders: string[] = [];
  public loadingMessage: string | null = null;
  public previewsState: IGlobalState | undefined;
  private scenesList: string[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    private _http: HttpClient) {
    this._remoteIp = localStorage.getItem('ip');
  }

  ngOnInit() {
    this.clientSocket$ = webSocket<IClientState>(environment.notificationWebSocket.client);

    this.clientSocket$
      .pipe(
        tap((msg: IClientState) => {
          console.log("@CLIENT_STATE", msg);

          switch (msg.RemoteServerState) {
            case MachineState.Off:

              this._dialog.closeAll();

              this._dialog.open(StartMachineDialogComponent, {
                hasBackdrop: false,
                disableClose: true,
                maxWidth: '340px',
                width: '100%',
                panelClass: 'kastr-dialog-container'
              });

              if (this.machineState == MachineState.Off) {
                break;
              }

              this.disconectToSocketRemoteServer();
              this.machineState = msg.RemoteServerState;

              this.loaders.pop();
              this._snackBar.open("Remote server is OFF.", "", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
              });

              break;
            case MachineState.On:

              if (this.machineState !== MachineState.On &&
                msg.RemoteServerState == MachineState.On) {
                this.connectToSocketRemoteServer();

                this.machineState = msg.RemoteServerState;
                this._dialog.closeAll();
                this._snackBar.dismiss();
                this.loaders.pop();
                break;
              }

              break;
            case MachineState.TurningOff:
              if (this.machineState == MachineState.TurningOff) {
                break;
              }

              this.disconectToSocketRemoteServer();
              this.machineState = msg.RemoteServerState;

              this.machineState = MachineState.TurningOff;
              this.loaders.push("MACHINE_STATE" + MachineState[this.machineState]);
              this.loaders = this.loaders.filter((v, i, a) => a.indexOf(v) === i);

              this._snackBar.open("Turning off remote server.", "", {
                verticalPosition: 'top',
                horizontalPosition: 'center'
              });

              break;
            case MachineState.TurningOn:
              if (this.machineState == MachineState.TurningOn) {
                break;
              }

              this.disconectToSocketRemoteServer();
              this.machineState = msg.RemoteServerState;

              this.machineState = MachineState.TurningOn;
              this.loaders.push("MACHINE_STATE" + MachineState[this.machineState]);
              this.loaders = this.loaders.filter((v, i, a) => a.indexOf(v) === i);

              this._snackBar.open("Turning on remote server.", "", {
                verticalPosition: 'top',
                horizontalPosition: 'center'
              });

              break;
            default:
              console.warn("The state not mapped" + msg.RemoteServerState);
          }
        }),
        retryWhen((errors: any) => {
          return errors.pipe(delayWhen((val: any) => timer(val * 1000)))
        })
      )
      .subscribe();
  }

  disconectToSocketRemoteServer() {
    this.stateSocket$?.unsubscribe();
    this.previewSocket$?.unsubscribe();
  }

  connectToSocketRemoteServer() {
    console.log("TENTANDO CONNECTAR IP:" + this._remoteIp);

    this.stateSocket$ = webSocket<IGlobalState>("ws://" + this.removeHttp(this._remoteIp) + 'notification/state/subscribe');
    this.previewSocket$ = webSocket<INotificationPreview>("ws://" + this.removeHttp(this._remoteIp) + 'notification/preview/subscribe');

    this.previewSocket$
      .pipe(
        retry(3)
      )
      .subscribe(
        msg => {
          if (msg.CurrentScene) {
            this.currentSceneImage = msg.CurrentScene;
          }
        },
        err => console.log(err)
      );

    this.stateSocket$
      .pipe(
        retry(3),
      ).subscribe((msg: IGlobalState) => {

        if (this.previewsState?.ObsState.State !== msg.ObsState.State) {
          this.handlerObsState(msg.ObsState);
        }

        if (this.previewsState?.CounterStikeGameState.State !== msg.CounterStikeGameState.State) {
          this.handlerCsGoState(msg.CounterStikeGameState);
        }

        this.previewsState = msg;
      });
  }

  canShowPreview(): boolean {
    return (this.previewsState?.ObsState.State != ObsStateType.Aborted) &&
      (this.previewsState?.ObsState.State != ObsStateType.Closed) &&
      (this.previewsState?.ObsState.State != ObsStateType.Opening)
  }

  private proccessLoadingCsgo(state: CounterStikeGameState) {
    this.loaders.push("CSGO" + CounterStikeGameStateType[state.State]);
    this.loaders = this.loaders.filter((v, i, a) => a.indexOf(v) === i);
    this._snackBar.open(CounterStikeGameStateType[state.State] + "  -  Counter-Strike GO", "", {
      duration: 1000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

  private stopProccessLoadingCsgo(state: CounterStikeGameState, withMessage: boolean) {
    this.loaders.pop();
    this.loadingMessage = null;
    if (withMessage)
      this._snackBar.open(CounterStikeGameStateType[state.State] + "  -  Counter-Strike GO", "", {
        duration: 1000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
  }

  handlerCsGoState(state: CounterStikeGameState) {
    switch (state.State) {
      case CounterStikeGameStateType.Closing:
        this.proccessLoadingCsgo(state);
        break;

      case CounterStikeGameStateType.Connecting:
        this.proccessLoadingCsgo(state);
        this.loadingMessage = "Connecting to " + state.ServerAddress;
        break;

      case CounterStikeGameStateType.Aborted:
        this._snackBar.open(state.ErrorMessages[0], "", {
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        this.stopProccessLoadingCsgo(state, false);
        break
      case CounterStikeGameStateType.Closed:
      case CounterStikeGameStateType.Connected:
        this.stopProccessLoadingCsgo(state, true);
        break;

      default:
        console.warn("The type is not mapped.");
    }


  }

  private proccessLoadingObs(state: IObsState) {
    this.loaders.push("OBS" + ObsStateType[state.State]);
    this.loaders = this.loaders.filter((v, i, a) => a.indexOf(v) === i);
    this._snackBar.open(ObsStateType[state.State] + "- OBS", "", {
      duration: 1000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

  private stopProccessLoadingObs(state: IObsState, withMessage: boolean) {
    this.loaders.pop();
    this.loadingMessage = null;
    if (withMessage)
      this._snackBar.open(ObsStateType[state.State] + "- OBS", "", {
        duration: 1000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
  }

  handlerObsState(state: IObsState) {

    switch (state.State) {
      case ObsStateType.ChangingScene:
      case ObsStateType.Closing:
      case ObsStateType.Opening:
      case ObsStateType.StartingStream:
      case ObsStateType.StopingStream:
        this.proccessLoadingObs(state);
        break;

      case ObsStateType.Opened:
        this.stopProccessLoadingObs(state, true);
        this.getScenes();
        break;

      case ObsStateType.Streaming:
        this.stopProccessLoadingObs(state, true);

        if (this.scenesList.length == 0) {
          this.getScenes();
        }
        break;

      case ObsStateType.Aborted:
      case ObsStateType.ChangedScene:
      case ObsStateType.Closed:
        this.stopProccessLoadingObs(state, true);
        break;

      default:
        console.warn("The type is not mapped.");
    }
  }

  startCsGo() {
    this._dialog.open(CsgoStartDialogComponent, {
      width: '100%',
      maxWidth: '424px',
      panelClass: 'kastr-dialog-container',
      data: {
        remoteIp: this._remoteIp,
      }
    });
  }

  csgoIsClosedOrAborted() {
    return this.previewsState?.CounterStikeGameState.State == CounterStikeGameStateType.Closed ||
      this.previewsState?.CounterStikeGameState.State == CounterStikeGameStateType.Aborted;
  }

  obsIsClosedOrAborted() {
    return this.previewsState?.ObsState.State == ObsStateType.Aborted ||
      this.previewsState?.ObsState.State == ObsStateType.Closed;
  }

  obsIsClosedOrStreaming() {
    return this.obsIsClosedOrAborted() ||
      this.previewsState?.ObsState.State == ObsStateType.Streaming;
  }

  obsIsNotClosedOrNotStreaming() {
    return !this.obsIsClosedOrAborted() &&
      this.previewsState?.ObsState.State != ObsStateType.Streaming;
  }

  openPreviewModal() {
    console.log(this.scenesList.filter(x => x != this.previewsState?.ObsState.CurrenteScene), this.previewsState?.ObsState.CurrenteScene, this.scenesList);

    this._dialog.open(ChangeSceneDialogComponent, {
      maxWidth: "906px",
      width: "100%",
      data: {
        remoteIp: this._remoteIp,
        initialImage: this.previewSceneImage,
        options: this.scenesList.filter(x => x != this.previewsState?.ObsState.CurrenteScene),
        selected: this.previewsState?.ObsState.PreviewScene
      },
      panelClass: 'kastr-dialog-container'
    });
  }

  getScenes() {
    this._http.get(this._remoteIp + "api/obs/scenes")
      .subscribe((data) => {
        this.scenesList = data as string[];
      });
  }

  startStream() {
    this._http.get(this._remoteIp + "api/obs/start/stream")
      .subscribe(() => EMPTY);
  }

  stopStream() {
    this._http.get(this._remoteIp + "api/obs/stop/stream")
      .subscribe(() => EMPTY);
  }

  closeCsGo() {
    this._http.get(this._remoteIp + "api/counter-strike/close")
      .subscribe(() => EMPTY);
  }

  turnOfRemoteServer() {
    this._http.get("/api/machine-manager/turnOff")
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

