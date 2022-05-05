export interface INotificationPreview {
  PreviewScene: string;
  CurrentScene: string;
}

export enum MachineState {
  Off = 0,
  On = 1,
  TurningOn = 2,
  TurningOff = 3
}

export enum ObsStateType {
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

export interface IClientState {
  RemoteServerState: MachineState;
  LastSyncDate: Date;
}

export interface IObsState {
  State: ObsStateType;
  ErrorMessages: string[];
  CurrenteScene: string;
  PreviewScene: string;
}

export enum CounterStikeGameStateType {
  Connecting = 0,
  Connected = 1,
  Closing = 2,
  Closed = 3,
  Aborted = 4
}
export interface CounterStikeGameState {
  ServerAddress: string;
  ErrorMessages: string[];
  State: CounterStikeGameStateType;
}

export interface IGlobalState {
  ObsState: IObsState;
  CounterStikeGameState: CounterStikeGameState;
}