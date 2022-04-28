"use strict";
(self["webpackChunkClientApp"] = self["webpackChunkClientApp"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/webSocket */ 2227);
/* harmony import */ var _components_dialog_change_scene_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dialog-change-scene.component */ 8365);
/* harmony import */ var _components_dialog_start_csgo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dialog-start-csgo.component */ 1477);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8838);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8504);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7317);











const _c0 = ["streamingAnimation"];
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r0.loadingMessage != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.loadingMessage);
} }
const _c1 = function (a0, a1) { return { "turn-on": a0, "turn-off": a1 }; };
var MachineState;
(function (MachineState) {
    MachineState[MachineState["Off"] = 0] = "Off";
    MachineState[MachineState["On"] = 1] = "On";
    MachineState[MachineState["TurningOn"] = 2] = "TurningOn";
    MachineState[MachineState["TurningOff"] = 3] = "TurningOff";
})(MachineState || (MachineState = {}));
var ObsStateType;
(function (ObsStateType) {
    ObsStateType[ObsStateType["Opening"] = 0] = "Opening";
    ObsStateType[ObsStateType["Opened"] = 1] = "Opened";
    ObsStateType[ObsStateType["Closed"] = 2] = "Closed";
    ObsStateType[ObsStateType["Closing"] = 3] = "Closing";
    ObsStateType[ObsStateType["StartingStream"] = 4] = "StartingStream";
    ObsStateType[ObsStateType["Streaming"] = 5] = "Streaming";
    ObsStateType[ObsStateType["StopingStream"] = 6] = "StopingStream";
    ObsStateType[ObsStateType["ChangingScene"] = 7] = "ChangingScene";
    ObsStateType[ObsStateType["ChangedScene"] = 8] = "ChangedScene";
    ObsStateType[ObsStateType["Aborted"] = 9] = "Aborted";
})(ObsStateType || (ObsStateType = {}));
var CounterStikeGameStateType;
(function (CounterStikeGameStateType) {
    CounterStikeGameStateType[CounterStikeGameStateType["Connecting"] = 0] = "Connecting";
    CounterStikeGameStateType[CounterStikeGameStateType["Connected"] = 1] = "Connected";
    CounterStikeGameStateType[CounterStikeGameStateType["Closing"] = 2] = "Closing";
    CounterStikeGameStateType[CounterStikeGameStateType["Closed"] = 3] = "Closed";
    CounterStikeGameStateType[CounterStikeGameStateType["Aborted"] = 4] = "Aborted";
})(CounterStikeGameStateType || (CounterStikeGameStateType = {}));
class AppComponent {
    constructor(_snackBar, dialog, http) {
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.http = http;
        this.currentSceneImage = "";
        this.previewSceneImage = "";
        this.machineState = MachineState.Off;
        this.loaders = [];
        this.loadingMessage = null;
        this.scenesList = [];
    }
    ngOnInit() {
        this.clientSocket$ = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_4__.webSocket)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.notificationWebSocket.client);
        this.connectToSocketRemoteServer();
        this.clientSocket$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((msg) => {
            console.log("@CLIENT_STATE", msg);
            switch (msg.RemoteServerState) {
                case MachineState.Off:
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
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.retryWhen)((errors) => {
            return errors.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.delayWhen)((val) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(val * 1000)));
        }))
            .subscribe();
    }
    disconectToSocketRemoteServer() {
        var _a, _b;
        (_a = this.stateSocket$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.previewSocket$) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    connectToSocketRemoteServer() {
        this.stateSocket$ = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_4__.webSocket)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.notificationWebSocket.state);
        this.previewSocket$ = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_4__.webSocket)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.notificationWebSocket.preview);
        this.previewSocket$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.retry)())
            .subscribe(msg => {
            if (msg) {
                this.currentSceneImage = msg.CurrentScene;
                this.previewSceneImage = msg.PreviewScene;
            }
        }, err => console.log(err), () => {
            this.previewSocket$ = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_4__.webSocket)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.notificationWebSocket.preview);
        });
        this.stateSocket$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((msg) => {
            var _a, _b;
            if (((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.State) !== msg.ObsState.State) {
                this.handlerObsState(msg.ObsState);
            }
            if (((_b = this.previewsState) === null || _b === void 0 ? void 0 : _b.CounterStikeGameState.State) !== msg.CounterStikeGameState.State) {
                this.handlerCsGoState(msg.CounterStikeGameState);
            }
            this.previewsState = msg;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.retryWhen)((errors) => {
            return errors.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.delayWhen)((val) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(val * 1000)));
        })).subscribe();
    }
    canShowPreview() {
        var _a, _b, _c;
        return (((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.State) != ObsStateType.Aborted) &&
            (((_b = this.previewsState) === null || _b === void 0 ? void 0 : _b.ObsState.State) != ObsStateType.Closed) &&
            (((_c = this.previewsState) === null || _c === void 0 ? void 0 : _c.ObsState.State) != ObsStateType.Opening);
    }
    proccessLoadingCsgo(state) {
        this.loaders.push("CSGO" + CounterStikeGameStateType[state.State]);
        this.loaders = this.loaders.filter((v, i, a) => a.indexOf(v) === i);
        this._snackBar.open(CounterStikeGameStateType[state.State] + "  -  Counter-Strike GO", "", {
            duration: 1000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
        });
    }
    stopProccessLoadingCsgo(state, withMessage) {
        this.loaders.pop();
        this.loadingMessage = null;
        if (withMessage)
            this._snackBar.open(CounterStikeGameStateType[state.State] + "  -  Counter-Strike GO", "", {
                duration: 1000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
            });
    }
    handlerCsGoState(state) {
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
                break;
            case CounterStikeGameStateType.Closed:
            case CounterStikeGameStateType.Connected:
                this.stopProccessLoadingCsgo(state, true);
                break;
            default:
                console.warn("The type is not mapped.");
        }
    }
    proccessLoadingObs(state) {
        this.loaders.push("OBS" + ObsStateType[state.State]);
        this.loaders = this.loaders.filter((v, i, a) => a.indexOf(v) === i);
        this._snackBar.open(ObsStateType[state.State] + "- OBS", "", {
            duration: 1000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
        });
    }
    stopProccessLoadingObs(state, withMessage) {
        this.loaders.pop();
        this.loadingMessage = null;
        if (withMessage)
            this._snackBar.open(ObsStateType[state.State] + "- OBS", "", {
                duration: 1000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
            });
    }
    handlerObsState(state) {
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
        var _a, _b;
        return ((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.CounterStikeGameState.State) == CounterStikeGameStateType.Closed ||
            ((_b = this.previewsState) === null || _b === void 0 ? void 0 : _b.CounterStikeGameState.State) == CounterStikeGameStateType.Aborted;
    }
    obsIsClosedOrAborted() {
        var _a, _b;
        return ((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.State) == ObsStateType.Aborted ||
            ((_b = this.previewsState) === null || _b === void 0 ? void 0 : _b.ObsState.State) == ObsStateType.Closed;
    }
    obsIsClosedOrStreaming() {
        var _a;
        return this.obsIsClosedOrAborted() ||
            ((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.State) == ObsStateType.Streaming;
    }
    obsIsNotClosedOrNotStreaming() {
        var _a;
        return !this.obsIsClosedOrAborted() &&
            ((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.State) != ObsStateType.Streaming;
    }
    startAnimationStreaming() {
        var _a;
        (_a = this.streamingAnimation) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add("streaming");
    }
    stopAnimationStreaming() {
        var _a;
        (_a = this.streamingAnimation) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.remove("streaming");
    }
    openPreviewModal() {
        var _a, _b;
        console.log(this.scenesList.filter(x => { var _a; return x != ((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.CurrenteScene); }), (_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.CurrenteScene, this.scenesList);
        this.dialog.open(_components_dialog_change_scene_component__WEBPACK_IMPORTED_MODULE_0__.DialogChangeSceneComponent, {
            data: {
                initialImage: this.previewSceneImage,
                options: this.scenesList.filter(x => { var _a; return x != ((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.CurrenteScene); }),
                selected: (_b = this.previewsState) === null || _b === void 0 ? void 0 : _b.ObsState.PreviewScene
            }
        });
    }
    getScenes() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + "/obs/scenes")
            .subscribe((data) => {
            this.scenesList = data;
        });
    }
    openObs() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + "/obs/start")
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY);
    }
    closeObs() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + "/obs/close")
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY);
    }
    startStream() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + "/obs/start/stream")
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY);
    }
    stopStream() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + "/obs/stop/stream")
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY);
    }
    startCsGo() {
        this.dialog.open(_components_dialog_start_csgo_component__WEBPACK_IMPORTED_MODULE_1__.DialogStartCsGoComponent);
    }
    closeCsGo() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + "/counter-strike/close")
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY);
    }
    turnOnOrOffRemoteServer() {
        if (this.machineState == MachineState.On) {
            this.http.get("/api/machine-manager/turnOff")
                .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY);
        }
        else if (this.machineState == MachineState.Off) {
            this.http.get("/api/machine-manager/turnOn")
                .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY);
        }
    }
    hasConnectionToRemoteServer() {
        return this.machineState == MachineState.On;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.streamingAnimation = _t.first);
    } }, decls: 23, vars: 14, consts: [["class", "loader-container", 4, "ngIf"], [1, "layout", "layout-streaming"], [1, "current-scene-preview"], ["alt", "preview", 3, "src", "hidden"], [3, "hidden"], [1, "form"], [1, "button-col"], ["mat-flat-button", "", 3, "ngClass", "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [1, "animate-flicker"], ["streamingAnimation", ""], [1, "loader-container"], [1, "loader"], [1, "message", 3, "hidden"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "OBS IS CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.turnOnOrOffRemoteServer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() { return ctx.startCsGo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Start Cs Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.closeCsGo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Close Cs Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() { return ctx.openPreviewModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Open Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_17_listener() { return ctx.startStream(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Start Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_19_listener() { return ctx.stopStream(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Stop Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loaders.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.currentSceneImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("hidden", !ctx.canShowPreview() || !ctx.hasConnectionToRemoteServer());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.canShowPreview() && ctx.hasConnectionToRemoteServer());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](11, _c1, !ctx.hasConnectionToRemoteServer(), ctx.hasConnectionToRemoteServer()));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Turn ", ctx.hasConnectionToRemoteServer() ? "Off" : "On", " Remote Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.csgoIsClosedOrAborted() || !ctx.hasConnectionToRemoteServer());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.csgoIsClosedOrAborted() || !ctx.hasConnectionToRemoteServer());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.obsIsClosedOrAborted() || !ctx.hasConnectionToRemoteServer());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.obsIsClosedOrStreaming() || !ctx.hasConnectionToRemoteServer());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.obsIsClosedOrAborted() || ctx.obsIsNotClosedOrNotStreaming() || !ctx.hasConnectionToRemoteServer());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass], styles: [".layout[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n\n.current-scene-preview[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 75%;\n  min-height: 200px;\n}\n\n.current-scene-preview[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n\n.form[_ngcontent-%COMP%]   .button-col[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.form[_ngcontent-%COMP%]   .button-col[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  height: 75px;\n  background-color: rgba(0, 0, 0, 0.877);\n}\n\n.form[_ngcontent-%COMP%]   .button-col[_ngcontent-%COMP%]    > .mat-button-disabled[_ngcontent-%COMP%] {\n  background-color: rgba(158, 158, 158, 0.877);\n  color: black;\n}\n\n.form[_ngcontent-%COMP%]   .button-col[_ngcontent-%COMP%]   .turn-on[_ngcontent-%COMP%] {\n  background-color: rgba(19, 44, 19, 0.911);\n  color: white;\n}\n\n.form[_ngcontent-%COMP%]   .button-col[_ngcontent-%COMP%]   .turn-off[_ngcontent-%COMP%] {\n  background-color: rgba(58, 23, 23, 0.897);\n  color: white;\n}\n\n@media (max-width: 768px) {\n  .form[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    overflow: auto;\n    height: calc(100% - 200px) !important;\n  }\n\n  .button-col[_ngcontent-%COMP%] {\n    margin: 0px !important;\n    padding: 0px !important;\n    flex-direction: column;\n  }\n  .button-col[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    height: 50px !important;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n\n@keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.animate-flicker[_ngcontent-%COMP%] {\n  animation: flickerAnimation 2s infinite;\n}\n\n.streaming[_ngcontent-%COMP%] {\n  height: calc(100% - 4px);\n  position: fixed;\n  width: calc(100% - 3px);\n  opacity: 1;\n  color: red;\n  border: solid 2px red;\n  z-index: -5;\n}\n\n.full-witdh[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  color: #ff1313;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  display: flex;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.363);\n  z-index: 5000;\n}\n\n.loader-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.644);\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  display: flex;\n  padding: 10px;\n  vertical-align: middle;\n  text-align: center;\n}\n\n.loader[_ngcontent-%COMP%] {\n  font-size: 90px;\n  text-indent: -9999em;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  margin: 72px auto;\n  position: relative;\n  transform: translateZ(0);\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n}\n\n@keyframes load6 {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  5%, 95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  10%, 59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n}\n\n@keyframes round {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBQU47O0FBR0k7RUFDRSw0Q0FBQTtFQUNBLFlBQUE7QUFETjs7QUFJSTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtBQUZOOztBQUtHO0VBQ0cseUNBQUE7RUFDQSxZQUFBO0FBSE47O0FBUUE7RUFDRTtJQUNFLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFFQSxxQ0FBQTtFQU5GOztFQVNBO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0VBTkY7RUFRRTtJQUNFLGdCQUFBO0lBQ0EsdUJBQUE7SUFFQSxpQkFBQTtJQUNBLGtCQUFBO0VBUEo7QUFDRjs7QUFXQTtFQUNFO0lBQU8sVUFBQTtFQVJQO0VBU0E7SUFBTyxVQUFBO0VBTlA7RUFPQTtJQUFPLFVBQUE7RUFKUDtBQUNGOztBQW9CQTtFQUlJLHVDQUFBO0FBZUo7O0FBWkE7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBZUY7O0FBWkE7RUFDRSxXQUFBO0FBZUY7O0FBWkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtBQWVGOztBQWJFO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFlSjs7QUFYQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFHQSx3QkFBQTtFQUVBLDZEQUFBO0FBY0Y7O0FBVUE7RUFDRTtJQUNFLG1IQUFBO0VBYUY7RUFYQTtJQUVFLG1IQUFBO0VBWUY7RUFWQTtJQUVFLG1KQUFBO0VBV0Y7RUFUQTtJQUNFLGtKQUFBO0VBV0Y7RUFUQTtJQUNFLGdKQUFBO0VBV0Y7RUFUQTtJQUNFLG1IQUFBO0VBV0Y7QUFDRjs7QUFDQTtFQUNFO0lBRUUsdUJBQUE7RUFXRjtFQVRBO0lBRUUseUJBQUE7RUFXRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmN1cnJlbnQtc2NlbmUtcHJldmlld3tcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6NzUlO1xyXG4gIG1pbi1oZWlnaHQ6MjAwcHg7XHJcblxyXG4gICYgPiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3Jte1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5idXR0b24tY29se1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuODc3KTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLm1hdC1idXR0b24tZGlzYWJsZWR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNTgsIDE1OCwgMTU4LCAwLjg3Nyk7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAudHVybi1vbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksIDQ0LCAxOSwgMC45MTEpO1xyXG4gICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgIC50dXJuLW9mZiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDIzLCAyMywgMC44OTcpO1xyXG4gICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb3JtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwMHB4KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1jb2x7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICYgPiBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xyXG4gIDAlICAgeyBvcGFjaXR5OjE7IH1cclxuICA1MCUgIHsgb3BhY2l0eTowOyB9XHJcbiAgMTAwJSB7IG9wYWNpdHk6MTsgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbntcclxuICAwJSAgIHsgb3BhY2l0eToxOyB9XHJcbiAgNTAlICB7IG9wYWNpdHk6MDsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OjE7IH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbntcclxuICAwJSAgIHsgb3BhY2l0eToxOyB9XHJcbiAgNTAlICB7IG9wYWNpdHk6MDsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OjE7IH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbntcclxuICAwJSAgIHsgb3BhY2l0eToxOyB9XHJcbiAgNTAlICB7IG9wYWNpdHk6MDsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OjE7IH1cclxufVxyXG4uYW5pbWF0ZS1mbGlja2VyIHtcclxuICAgLXdlYmtpdC1hbmltYXRpb246IGZsaWNrZXJBbmltYXRpb24gMnMgaW5maW5pdGU7XHJcbiAgIC1tb3otYW5pbWF0aW9uOiBmbGlja2VyQW5pbWF0aW9uIDJzIGluZmluaXRlO1xyXG4gICAtby1hbmltYXRpb246IGZsaWNrZXJBbmltYXRpb24gMnMgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGZsaWNrZXJBbmltYXRpb24gMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5zdHJlYW1pbmd7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0cHgpOyBcclxuICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzcHgpOyBcclxuICBvcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHggcmVkO1xyXG4gIHotaW5kZXg6IC01O1xyXG59XHJcblxyXG4uZnVsbC13aXRkaHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvYWRlci1jb250YWluZXJ7XHJcbiAgY29sb3I6ICNmZjEzMTM7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzYzKTtcclxuICB6LWluZGV4OiA1MDAwO1xyXG5cclxuICAubWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY0NCk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiA3MnB4IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNiAxLjdzIGluZmluaXRlIGVhc2UsIHJvdW5kIDEuN3MgaW5maW5pdGUgZWFzZTtcclxuICBhbmltYXRpb246IGxvYWQ2IDEuN3MgaW5maW5pdGUgZWFzZSwgcm91bmQgMS43cyBpbmZpbml0ZSBlYXNlO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNiB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbiAgNSUsXHJcbiAgOTUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDEwJSxcclxuICA1OSUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4wODdlbSAtMC44MjVlbSAwIC0wLjQyZW0sIC0wLjE3M2VtIC0wLjgxMmVtIDAgLTAuNDRlbSwgLTAuMjU2ZW0gLTAuNzg5ZW0gMCAtMC40NmVtLCAtMC4yOTdlbSAtMC43NzVlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zMzhlbSAtMC43NThlbSAwIC0wLjQyZW0sIC0wLjU1NWVtIC0wLjYxN2VtIDAgLTAuNDRlbSwgLTAuNjcxZW0gLTAuNDg4ZW0gMCAtMC40NmVtLCAtMC43NDllbSAtMC4zNGVtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDM4JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjM3N2VtIC0wLjc0ZW0gMCAtMC40MmVtLCAtMC42NDVlbSAtMC41MjJlbSAwIC0wLjQ0ZW0sIC0wLjc3NWVtIC0wLjI5N2VtIDAgLTAuNDZlbSwgLTAuODJlbSAtMC4wOWVtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkNiB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbiAgNSUsXHJcbiAgOTUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDEwJSxcclxuICA1OSUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4wODdlbSAtMC44MjVlbSAwIC0wLjQyZW0sIC0wLjE3M2VtIC0wLjgxMmVtIDAgLTAuNDRlbSwgLTAuMjU2ZW0gLTAuNzg5ZW0gMCAtMC40NmVtLCAtMC4yOTdlbSAtMC43NzVlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zMzhlbSAtMC43NThlbSAwIC0wLjQyZW0sIC0wLjU1NWVtIC0wLjYxN2VtIDAgLTAuNDRlbSwgLTAuNjcxZW0gLTAuNDg4ZW0gMCAtMC40NmVtLCAtMC43NDllbSAtMC4zNGVtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDM4JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjM3N2VtIC0wLjc0ZW0gMCAtMC40MmVtLCAtMC42NDVlbSAtMC41MjJlbSAwIC0wLjQ0ZW0sIC0wLjc3NWVtIC0wLjI5N2VtIDAgLTAuNDZlbSwgLTAuODJlbSAtMC4wOWVtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdW5kIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyByb3VuZCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_dialog_change_scene_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dialog-change-scene.component */ 8365);
/* harmony import */ var _components_dialog_start_csgo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dialog-start-csgo.component */ 1477);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_dialog_change_scene_component__WEBPACK_IMPORTED_MODULE_1__.DialogChangeSceneComponent,
        _components_dialog_start_csgo_component__WEBPACK_IMPORTED_MODULE_2__.DialogStartCsGoComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule] }); })();


/***/ }),

/***/ 8365:
/*!*************************************************************!*\
  !*** ./src/app/components/dialog-change-scene.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogChangeSceneComponent": () => (/* binding */ DialogChangeSceneComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/webSocket */ 2227);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 8133);













function DialogChangeSceneComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r1, " ");
} }
const preview = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__.webSocket)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.notificationWebSocket.preview);
class DialogChangeSceneComponent {
    constructor(dialogRef, data, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.previewSceneImage = "";
        this.selectedOption = "";
        this.previewSceneImage = data.initialImage;
        this.selectedOption = data.selected;
        preview.subscribe(msg => {
            this.previewSceneImage = msg.PreviewScene;
        }, err => console.log(err));
    }
    select(scene) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/obs/change-preview-scene?scene=" + scene)
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY);
    }
    isSelected(value) {
        return value === this.data.selected;
    }
    onClickOk() {
        this.dialogRef.close();
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/obs/change-current-scene?scene=" + this.selectedOption)
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY);
    }
}
DialogChangeSceneComponent.ɵfac = function DialogChangeSceneComponent_Factory(t) { return new (t || DialogChangeSceneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
DialogChangeSceneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogChangeSceneComponent, selectors: [["dialog-change-scene"]], decls: 15, vars: 3, consts: [["mat-dialog-title", ""], [1, "body"], ["appearance", "fill"], [3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-content", ""], [1, "preview-scene"], [3, "src"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", "", 3, "click"], [3, "value"]], template: function DialogChangeSceneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Scenes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DialogChangeSceneComponent_Template_mat_select_ngModelChange_5_listener($event) { return ctx.selectedOption = $event; })("selectionChange", function DialogChangeSceneComponent_Template_mat_select_selectionChange_5_listener($event) { return ctx.select($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DialogChangeSceneComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogChangeSceneComponent_Template_button_click_13_listener() { return ctx.onClickOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.previewSceneImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption], styles: [".preview-scene[_ngcontent-%COMP%] {\n  position: relative;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: inherit;\n  height: inherit;\n  max-height: inherit;\n  max-width: inherit;\n}\n.preview-scene[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  display: block;\n  object-fit: cover;\n}\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.body[_ngcontent-%COMP%]    > .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1jaGFuZ2Utc2NlbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7QUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFGO0FBRUU7RUFDRSxXQUFBO0FBQUoiLCJmaWxlIjoiZGlhbG9nLWNoYW5nZS1zY2VuZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2aWV3LXNjZW5le1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxuICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICYgPiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi5ib2R5e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJiA+IC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 1477:
/*!***********************************************************!*\
  !*** ./src/app/components/dialog-start-csgo.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogStartCsGoComponent": () => (/* binding */ DialogStartCsGoComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);









class DialogStartCsGoComponent {
    constructor(dialogRef, http) {
        this.dialogRef = dialogRef;
        this.http = http;
        this.ip = "";
    }
    onClickOk() {
        this.dialogRef.close();
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/counter-strike/start?ip=" + this.ip)
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_1__.EMPTY);
    }
}
DialogStartCsGoComponent.ɵfac = function DialogStartCsGoComponent_Factory(t) { return new (t || DialogStartCsGoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
DialogStartCsGoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DialogStartCsGoComponent, selectors: [["dialog-start-csgo"]], decls: 11, vars: 2, consts: [["mat-dialog-content", ""], [1, "content"], ["appearance", "fill"], ["matInput", "", "placeholder", "Server Ip", 3, "required", "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", "", 3, "click"]], template: function DialogStartCsGoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Server Ip");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DialogStartCsGoComponent_Template_input_ngModelChange_5_listener($event) { return ctx.ip = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogStartCsGoComponent_Template_button_click_9_listener() { return ctx.onClickOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Start & Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", true)("ngModel", ctx.ip);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1zdGFydC1jc2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKIiwiZmlsZSI6ImRpYWxvZy1zdGFydC1jc2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJiA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "http://localhost:9001/api",
    notificationWebSocket: {
        state: "ws://localhost:9001/notification/state/subscribe",
        preview: "ws://localhost:9001/notification/preview/subscribe",
        client: "wss://localhost:44307/client/notification/subscribe"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map