import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DialogChangeSceneComponent } from "./components/dialog-change-scene.component";
import { DialogStartCsGoComponent } from "./components/dialog-start-csgo.component";
import { delayWhen, EMPTY, retry, retryWhen, tap, timer } from 'rxjs';
import { environment } from "../environments/environment";

const stateSocket$ = webSocket<IGlobalState>(environment.notificationWebSocket.state);
const previewSocket$ = webSocket<INotificationPreview>(environment.notificationWebSocket.preview);

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
    previewSocket$
      .pipe(
        tap((msg: INotificationPreview) => {
          this.currentSceneImage = msg.CurrentScene;
          this.previewSceneImage = msg.PreviewScene;
        }),
        retryWhen((errors: any) => {
          return errors.pipe(delayWhen((val: any) => timer(val * 1000)))
        })
      )
      .subscribe();

    stateSocket$
      .pipe(
        tap((msg: IGlobalState) => {
          this.machineState = MachineState.On;
          this.loaders = this.loaders.filter(x => x !== MachineState[MachineState.TurningOn]);

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
      this.machineState = MachineState.TurningOff;
      this.loaders.push("MACHINE_STATE" + MachineState[this.machineState]);
      this.loaders = this.loaders.filter((v, i, a) => a.indexOf(v) === i);

      this._snackBar.open("Turning off remote server.", "", {
        duration: 10000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });

      this.http.get(environment.apiUrl + "/machine-manager/shutdown")
        .subscribe(() => EMPTY);

      setTimeout(() => {
        this.machineState = MachineState.Off;
        this.loaders.pop();
      }, 10000);
    } else if (this.machineState == MachineState.Off) {
      this.machineState = MachineState.TurningOn;
      this.loaders.push("MACHINE_STATE" + MachineState[this.machineState]);

      this._snackBar.open("Turning on remote server.", "", {
        duration: 15000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });

      this.http.get("/machine-manager/turnOn")
        .subscribe(() => EMPTY);
    }
  }

  hasConnectionToRemoteServer() {
    console.log(this.machineState);
    return this.machineState == MachineState.On;
  }
}