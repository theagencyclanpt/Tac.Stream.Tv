import { Component, ViewChild, ElementRef, OnInit, MissingTranslationStrategy } from '@angular/core';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DialogChangeSceneComponent } from "./components/dialog-change-scene.component";
import { DialogStartCsGoComponent } from "./components/dialog-start-csgo.component";
import { StartMachineDialogComponent } from "./components/start-machine-dialog/start-machine-dialog.component";
import { delayWhen, EMPTY, Observable, of, retry, retryWhen, tap, timer } from 'rxjs';
import { environment } from "../environments/environment";
import {
  CounterStikeGameState,
  CounterStikeGameStateType,
  IClientState,
  IGlobalState,
  INotificationPreview,
  IObsState,
  MachineState,
  ObsStateType
} from "./interfaces";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public currentSceneImage: string = "";
  public previewSceneImage: string = "";
  public machineState: MachineState = MachineState.Off;
  private previewSocket$: WebSocketSubject<INotificationPreview> | undefined;
  public stateSocket$: WebSocketSubject<IGlobalState> | undefined;
  private clientSocket$: WebSocketSubject<IClientState> | undefined;
  private _startMachineDialogRef?: MatDialogRef<StartMachineDialogComponent, any>;

  @ViewChild('streamingAnimation', { static: true })
  streamingAnimation?: ElementRef<HTMLDivElement>;

  public loaders: string[] = [];
  public loadingMessage: string | null = null;
  public previewsState: IGlobalState | undefined;
  private scenesList: string[] = [];

  constructor(private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private http: HttpClient) { }

  ngOnInit() {
    this.clientSocket$ = webSocket<IClientState>(environment.notificationWebSocket.client);

    this.clientSocket$
      .pipe(
        tap((msg: IClientState) => {
          console.log("@CLIENT_STATE", msg);

          switch (msg.RemoteServerState) {
            case MachineState.Off:

              this._startMachineDialogRef = this.dialog.open(StartMachineDialogComponent, {
                closeOnNavigation: false,
                disableClose: true,
                hasBackdrop: true
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
                this._snackBar.dismiss();
                this.connectToSocketRemoteServer();

                this.machineState = msg.RemoteServerState;
                this.loaders.pop();

                if (this._startMachineDialogRef) {
                  this._startMachineDialogRef.close();
                }
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
    this.stateSocket$ = webSocket<IGlobalState>(environment.notificationWebSocket.state);
    this.previewSocket$ = webSocket<INotificationPreview>(environment.notificationWebSocket.preview);

    this.previewSocket$
      .pipe(
        retry(2)
      )
      .subscribe(
        msg => {
          if (msg) {
            this.currentSceneImage = msg.CurrentScene;
            this.previewSceneImage = msg.PreviewScene;
          }
        },
        err => {
          this.previewSocket$?.unsubscribe();
          console.error(err);
        },
        () => {
          this.previewSocket$ = webSocket<INotificationPreview>(environment.notificationWebSocket.preview);
        }
      );

    this.stateSocket$
      .pipe(
        retry(2)
      )
      .subscribe({
        next: (data: IGlobalState) => {
          if (this.previewsState?.ObsState.State !== data.ObsState.State) {
            this.handlerObsState(data.ObsState);
          }

          if (this.previewsState?.CounterStikeGameState.State !== data.CounterStikeGameState.State) {
            this.handlerCsGoState(data.CounterStikeGameState);
          }

          this.previewsState = data;
        },
        error: (error) => {
          this.stateSocket$?.complete();
          this.stateSocket$?.unsubscribe();
          console.error(error);
        }
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
    console.log(state);

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
    console.log(state);

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
        this.stopAnimationStreaming();
        this.getScenes();
        break;

      case ObsStateType.Streaming:
        this.stopProccessLoadingObs(state, true);
        this.startAnimationStreaming();

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

  startAnimationStreaming() {
    this.streamingAnimation?.nativeElement.classList.add("streaming");
  }

  stopAnimationStreaming() {
    this.streamingAnimation?.nativeElement.classList.remove("streaming");
  }

  openPreviewModal() {
    this.dialog.open(DialogChangeSceneComponent, {
      data: {
        initialImage: this.previewSceneImage,
        options: this.scenesList.filter(x => x != this.previewsState?.ObsState.CurrenteScene),
        selected: this.previewsState?.ObsState.PreviewScene
      }
    });
  }

  getScenes() {
    this.http.get(environment.apiUrl + "/obs/scenes")
      .subscribe((data) => {
        this.scenesList = data as string[];
      });
  }

  openObs() {
    this.http.get(environment.apiUrl + "/obs/start")
      .subscribe(() => EMPTY);
  }

  closeObs() {
    this.http.get(environment.apiUrl + "/obs/close")
      .subscribe(() => EMPTY);
  }

  startStream() {
    this.http.get(environment.apiUrl + "/obs/start/stream")
      .subscribe(() => EMPTY);
  }

  stopStream() {
    this.http.get(environment.apiUrl + "/obs/stop/stream")
      .subscribe(() => EMPTY);
  }

  startCsGo() {
    this.dialog.open(DialogStartCsGoComponent);
  }

  closeCsGo() {
    this.http.get(environment.apiUrl + "/counter-strike/close")
      .subscribe(() => EMPTY);
  }

  turnOnOrOffRemoteServer() {
    if (this.machineState == MachineState.On) {
      this.http.get("/api/machine-manager/turnOff")
        .subscribe(() => EMPTY);
    } else if (this.machineState == MachineState.Off) {
      this.http.get("/api/machine-manager/turnOn")
        .subscribe(() => EMPTY);
    }
  }

  hasConnectionToRemoteServer() {
    return this.machineState == MachineState.On;
  }
}