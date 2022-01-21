import { Component, ViewChild, ElementRef, OnInit, MissingTranslationStrategy } from '@angular/core';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DialogChangeSceneComponent } from "./components/dialog-change-scene.component";
import { DialogStartCsGoComponent } from "./components/dialog-start-csgo.component";
import { delayWhen, EMPTY, retry, retryWhen, tap, timer } from 'rxjs';
import { environment } from "../environments/environment";

interface INotificationPreview {
  PreviewScene: string;
  CurrentScene: string;
}

enum MachineState {
  Off = 0,
  On = 1,
  TurningOn = 2,
  TurningOff = 3
}

enum ObsStateType {
  Opening = 0,
  Opened = 1,
  Closed = 2,
  Closing = 3,
  StartingStream = 4,
  Streaming = 5,
  StopingStream = 6,
  ChangingScene = 7,
  ChangedScene = 8,
  Aborted = 9
}

interface IClientState {
  RemoteServerState: MachineState;
}

interface IObsState {
  State: ObsStateType;
  ErrorMessages: string[];
  CurrenteScene: string;
  PreviewScene: string;
}

enum CounterStikeGameStateType {
  Connecting = 0,
  Connected = 1,
  Closing = 2,
  Closed = 3,
  Aborted = 4
}
interface CounterStikeGameState {
  ServerAddress: string;
  ErrorMessages: string[];
  State: CounterStikeGameStateType;
}

interface IGlobalState {
  ObsState: IObsState;
  CounterStikeGameState: CounterStikeGameState;
}

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
  private stateSocket$: WebSocketSubject<IGlobalState> | undefined;
  private clientSocket$: WebSocketSubject<IClientState> | undefined;

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
    this.stateSocket$ = webSocket<IGlobalState>(environment.notificationWebSocket.state);
    this.clientSocket$ = webSocket<IClientState>("ws://" + location.host + "/client/notification/subscribe");
    this.previewSocket$ = webSocket<INotificationPreview>(environment.notificationWebSocket.preview);

    this.clientSocket$
      .pipe(
        tap((msg: IClientState) => {
          console.log(msg);

          switch (msg.RemoteServerState) {
            case MachineState.Off:

              if (this.machineState == MachineState.Off) {
                break;
              }

              console.log("LOADING OFF");

              this.machineState = msg.RemoteServerState;

              this.loaders.pop();
              this._snackBar.open("Remote server is OFF.", "", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
              });

              break;
            case MachineState.On:

              if (this.machineState == MachineState.On ||
                this.machineState == MachineState.TurningOn) {
                break;
              }

              console.log("LOADING on");

              this.machineState = msg.RemoteServerState;

              this.loaders.pop();
              this._snackBar.open("Remote server is ON.", "", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
              });

              break;

            case MachineState.TurningOff:
              if (this.machineState == MachineState.TurningOff) {
                break;
              }

              console.log("LOADING turning off");

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

              this.machineState = msg.RemoteServerState;

              console.log("LOADING turning on");


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

    this.stateSocket$
      .pipe(
        tap((msg: IGlobalState) => {

          if (this.previewsState?.ObsState.State !== msg.ObsState.State) {
            this.handlerObsState(msg.ObsState);
          }

          if (this.previewsState?.CounterStikeGameState.State !== msg.CounterStikeGameState.State) {
            this.handlerCsGoState(msg.CounterStikeGameState);
          }

          this.previewsState = msg;
        }),
        retryWhen((errors: any) => {
          return errors.pipe(delayWhen((val: any) => timer(val * 1000)))
        })
      ).subscribe();

    this.previewSocket$
      .pipe(
        retry()
      )
      .subscribe(
        msg => {
          if (msg) {
            this.currentSceneImage = msg.CurrentScene;
            this.previewSceneImage = msg.PreviewScene;
          }
        },
        err => console.log(err),
        () => console.log('complete')
      );
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
    console.log(this.scenesList.filter(x => x != this.previewsState?.ObsState.CurrenteScene), this.previewsState?.ObsState.CurrenteScene, this.scenesList);

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