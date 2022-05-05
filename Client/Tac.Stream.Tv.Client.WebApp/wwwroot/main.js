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
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/webSocket */ 2227);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8838);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 5716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 8504);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _components_change_scene_dialog_change_scene_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/change-scene-dialog/change-scene-dialog.component */ 349);
/* harmony import */ var _components_start_csgo_dialog_csgo_start_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/start-csgo-dialog/csgo-start-dialog.component */ 1429);
/* harmony import */ var _components_start_machine_dialog_start_machine_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/start-machine-dialog/start-machine-dialog.component */ 3730);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interfaces */ 3780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6362);












function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.currentSceneImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cant get preview from OBS, please restart remote server and try again. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_1_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r11.startCsGo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Start CSGO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_1_ng_template_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r13.closeCsGo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Stop CSGO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_1_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r15.startStream(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Start Stream");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_1_ng_template_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r17.stopStream(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Stop Stream");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_1_img_3_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_1_ng_template_4_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.openPreviewModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Change Scene");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AppComponent_div_1_button_11_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AppComponent_div_1_ng_template_12_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Turn Off Server");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AppComponent_div_1_button_19_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AppComponent_div_1_ng_template_20_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currentSceneImage)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.csgoIsClosedOrAborted())("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.obsIsClosedOrStreaming())("ngIfElse", _r9);
} }
class AppComponent {
    constructor(_snackBar, _dialog, _http) {
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._http = _http;
        this.currentSceneImage = "";
        this.previewSceneImage = "";
        this.machineState = _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState.Off;
        this.loaders = [];
        this.loadingMessage = null;
        this.scenesList = [];
    }
    ngOnInit() {
        this.clientSocket$ = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_6__.webSocket)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.notificationWebSocket.client);
        this.clientSocket$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)((msg) => {
            console.log("@CLIENT_STATE", msg);
            switch (msg.RemoteServerState) {
                case _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState.Off:
                    this._dialog.closeAll();
                    this._dialog.open(_components_start_machine_dialog_start_machine_dialog_component__WEBPACK_IMPORTED_MODULE_2__.StartMachineDialogComponent, {
                        hasBackdrop: false,
                        disableClose: true,
                        maxWidth: '340px',
                        width: '100%',
                        panelClass: 'kastr-dialog-container'
                    });
                    if (this.machineState == _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState.Off) {
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
                case _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState.On:
                    if (this.machineState !== _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState.On &&
                        msg.RemoteServerState == _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState.On) {
                        this.connectToSocketRemoteServer();
                        this.machineState = msg.RemoteServerState;
                        this._dialog.closeAll();
                        this._snackBar.dismiss();
                        this.loaders.pop();
                        break;
                    }
                    break;
                case _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState.TurningOff:
                    if (this.machineState == _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState.TurningOff) {
                        break;
                    }
                    this.disconectToSocketRemoteServer();
                    this.machineState = msg.RemoteServerState;
                    this.machineState = _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState.TurningOff;
                    this.loaders.push("MACHINE_STATE" + _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState[this.machineState]);
                    this.loaders = this.loaders.filter((v, i, a) => a.indexOf(v) === i);
                    this._snackBar.open("Turning off remote server.", "", {
                        verticalPosition: 'top',
                        horizontalPosition: 'center'
                    });
                    break;
                case _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState.TurningOn:
                    if (this.machineState == _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState.TurningOn) {
                        break;
                    }
                    this.disconectToSocketRemoteServer();
                    this.machineState = msg.RemoteServerState;
                    this.machineState = _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState.TurningOn;
                    this.loaders.push("MACHINE_STATE" + _interfaces__WEBPACK_IMPORTED_MODULE_4__.MachineState[this.machineState]);
                    this.loaders = this.loaders.filter((v, i, a) => a.indexOf(v) === i);
                    this._snackBar.open("Turning on remote server.", "", {
                        verticalPosition: 'top',
                        horizontalPosition: 'center'
                    });
                    break;
                default:
                    console.warn("The state not mapped" + msg.RemoteServerState);
            }
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.retryWhen)((errors) => {
            return errors.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.delayWhen)((val) => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(val * 1000)));
        }))
            .subscribe();
    }
    disconectToSocketRemoteServer() {
        var _a, _b;
        (_a = this.stateSocket$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.previewSocket$) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    connectToSocketRemoteServer() {
        this.stateSocket$ = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_6__.webSocket)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.notificationWebSocket.state);
        this.previewSocket$ = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_6__.webSocket)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.notificationWebSocket.preview);
        this.previewSocket$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.retry)())
            .subscribe(msg => {
            if (msg.CurrentScene) {
                this.currentSceneImage = msg.CurrentScene;
            }
        }, err => console.log(err), () => {
            this.previewSocket$ = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_6__.webSocket)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.notificationWebSocket.preview);
        });
        this.stateSocket$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)((msg) => {
            var _a, _b;
            if (((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.State) !== msg.ObsState.State) {
                this.handlerObsState(msg.ObsState);
            }
            if (((_b = this.previewsState) === null || _b === void 0 ? void 0 : _b.CounterStikeGameState.State) !== msg.CounterStikeGameState.State) {
                this.handlerCsGoState(msg.CounterStikeGameState);
            }
            this.previewsState = msg;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.retryWhen)((errors) => {
            return errors.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.delayWhen)((val) => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(val * 1000)));
        })).subscribe();
    }
    canShowPreview() {
        var _a, _b, _c;
        return (((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.State) != _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Aborted) &&
            (((_b = this.previewsState) === null || _b === void 0 ? void 0 : _b.ObsState.State) != _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Closed) &&
            (((_c = this.previewsState) === null || _c === void 0 ? void 0 : _c.ObsState.State) != _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Opening);
    }
    proccessLoadingCsgo(state) {
        this.loaders.push("CSGO" + _interfaces__WEBPACK_IMPORTED_MODULE_4__.CounterStikeGameStateType[state.State]);
        this.loaders = this.loaders.filter((v, i, a) => a.indexOf(v) === i);
        this._snackBar.open(_interfaces__WEBPACK_IMPORTED_MODULE_4__.CounterStikeGameStateType[state.State] + "  -  Counter-Strike GO", "", {
            duration: 1000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
        });
    }
    stopProccessLoadingCsgo(state, withMessage) {
        this.loaders.pop();
        this.loadingMessage = null;
        if (withMessage)
            this._snackBar.open(_interfaces__WEBPACK_IMPORTED_MODULE_4__.CounterStikeGameStateType[state.State] + "  -  Counter-Strike GO", "", {
                duration: 1000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
            });
    }
    handlerCsGoState(state) {
        switch (state.State) {
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.CounterStikeGameStateType.Closing:
                this.proccessLoadingCsgo(state);
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.CounterStikeGameStateType.Connecting:
                this.proccessLoadingCsgo(state);
                this.loadingMessage = "Connecting to " + state.ServerAddress;
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.CounterStikeGameStateType.Aborted:
                this._snackBar.open(state.ErrorMessages[0], "", {
                    verticalPosition: 'top',
                    horizontalPosition: 'center'
                });
                this.stopProccessLoadingCsgo(state, false);
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.CounterStikeGameStateType.Closed:
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.CounterStikeGameStateType.Connected:
                this.stopProccessLoadingCsgo(state, true);
                break;
            default:
                console.warn("The type is not mapped.");
        }
    }
    proccessLoadingObs(state) {
        this.loaders.push("OBS" + _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType[state.State]);
        this.loaders = this.loaders.filter((v, i, a) => a.indexOf(v) === i);
        this._snackBar.open(_interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType[state.State] + "- OBS", "", {
            duration: 1000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
        });
    }
    stopProccessLoadingObs(state, withMessage) {
        this.loaders.pop();
        this.loadingMessage = null;
        if (withMessage)
            this._snackBar.open(_interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType[state.State] + "- OBS", "", {
                duration: 1000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
            });
    }
    handlerObsState(state) {
        switch (state.State) {
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.ChangingScene:
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Closing:
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Opening:
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.StartingStream:
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.StopingStream:
                this.proccessLoadingObs(state);
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Opened:
                this.stopProccessLoadingObs(state, true);
                this.getScenes();
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Streaming:
                this.stopProccessLoadingObs(state, true);
                if (this.scenesList.length == 0) {
                    this.getScenes();
                }
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Aborted:
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.ChangedScene:
            case _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Closed:
                this.stopProccessLoadingObs(state, true);
                break;
            default:
                console.warn("The type is not mapped.");
        }
    }
    startCsGo() {
        this._dialog.open(_components_start_csgo_dialog_csgo_start_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CsgoStartDialogComponent, {
            width: '100%',
            maxWidth: '424px',
            panelClass: 'kastr-dialog-container'
        });
    }
    csgoIsClosedOrAborted() {
        var _a, _b;
        return ((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.CounterStikeGameState.State) == _interfaces__WEBPACK_IMPORTED_MODULE_4__.CounterStikeGameStateType.Closed ||
            ((_b = this.previewsState) === null || _b === void 0 ? void 0 : _b.CounterStikeGameState.State) == _interfaces__WEBPACK_IMPORTED_MODULE_4__.CounterStikeGameStateType.Aborted;
    }
    obsIsClosedOrAborted() {
        var _a, _b;
        return ((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.State) == _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Aborted ||
            ((_b = this.previewsState) === null || _b === void 0 ? void 0 : _b.ObsState.State) == _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Closed;
    }
    obsIsClosedOrStreaming() {
        var _a;
        return this.obsIsClosedOrAborted() ||
            ((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.State) == _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Streaming;
    }
    obsIsNotClosedOrNotStreaming() {
        var _a;
        return !this.obsIsClosedOrAborted() &&
            ((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.State) != _interfaces__WEBPACK_IMPORTED_MODULE_4__.ObsStateType.Streaming;
    }
    openPreviewModal() {
        var _a, _b;
        console.log(this.scenesList.filter(x => { var _a; return x != ((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.CurrenteScene); }), (_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.CurrenteScene, this.scenesList);
        this._dialog.open(_components_change_scene_dialog_change_scene_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ChangeSceneDialogComponent, {
            maxWidth: "906px",
            width: "100%",
            data: {
                initialImage: this.previewSceneImage,
                options: this.scenesList.filter(x => { var _a; return x != ((_a = this.previewsState) === null || _a === void 0 ? void 0 : _a.ObsState.CurrenteScene); }),
                selected: (_b = this.previewsState) === null || _b === void 0 ? void 0 : _b.ObsState.PreviewScene
            },
            panelClass: 'kastr-dialog-container'
        });
    }
    getScenes() {
        this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl + "/obs/scenes")
            .subscribe((data) => {
            this.scenesList = data;
        });
    }
    startStream() {
        this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl + "/obs/start/stream")
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_12__.EMPTY);
    }
    stopStream() {
        this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl + "/obs/stop/stream")
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_12__.EMPTY);
    }
    closeCsGo() {
        this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl + "/counter-strike/close")
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_12__.EMPTY);
    }
    turnOfRemoteServer() {
        this._http.get("/api/machine-manager/turnOff")
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_12__.EMPTY);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["class", "loader-container", 4, "ngIf"], ["class", "container d-flex flex-column full-height justify-content-center", 4, "ngIf"], [1, "loader-container"], [1, "loader"], [1, "container", "d-flex", "flex-column", "full-height", "justify-content-center"], [1, "row", "gx-1", "mb-5"], [1, "col-12", "d-flex", "justify-content-center", 2, "max-height", "506px"], ["class", "img-fluid rounded mx-auto d-block", "style", "height: 100%;", "alt", "preview", 3, "src", 4, "ngIf", "ngIfElse"], ["withoutImage", ""], [1, "row", "gx-3"], [1, "col-12", "col-md-6", "d-flex", "justify-content-center", "justify-content-md-end", "mb-3"], [1, "btn-kastr-lg", "btn-kastr", 3, "click"], [1, "col-12", "col-md-6", "d-flex", "justify-content-center", "justify-content-md-start", "mb-3"], ["class", "btn-kastr btn-kastr-lg btn-kastr-gray", 3, "click", 4, "ngIf", "ngIfElse"], ["stopCsgoElse", ""], [1, "btn-kastr-lg", "btn-kastr", "btn-kastr-red"], ["stopStreamElse", ""], ["alt", "preview", 1, "img-fluid", "rounded", "mx-auto", "d-block", 2, "height", "100%", 3, "src"], ["role", "alert", 1, "alert", "alert-danger"], [1, "btn-kastr", "btn-kastr-lg", "btn-kastr-gray", 3, "click"], [1, "btn-kastr", "btn-kastr-lg", "btn-kastr-red", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_1_Template, 22, 6, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loaders.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.machineState == 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf], styles: [".loader-container[_ngcontent-%COMP%] {\n  color: #ff1313;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  display: flex;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.363);\n  z-index: 5000;\n}\n.loader-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.644);\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  display: flex;\n  padding: 10px;\n  vertical-align: middle;\n  text-align: center;\n}\n.loader[_ngcontent-%COMP%] {\n  font-size: 90px;\n  text-indent: -9999em;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  margin: 72px auto;\n  position: relative;\n  transform: translateZ(0);\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n}\n@keyframes load6 {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  5%, 95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  10%, 59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n}\n@keyframes round {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFHQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFHQSx3QkFBQTtFQUVBLDZEQUFBO0FBQUY7QUF3QkE7RUFDRTtJQUNFLG1IQUFBO0VBREY7RUFHQTtJQUVFLG1IQUFBO0VBRkY7RUFJQTtJQUVFLG1KQUFBO0VBSEY7RUFLQTtJQUNFLGtKQUFBO0VBSEY7RUFLQTtJQUNFLGdKQUFBO0VBSEY7RUFLQTtJQUNFLG1IQUFBO0VBSEY7QUFDRjtBQWVBO0VBQ0U7SUFFRSx1QkFBQTtFQUhGO0VBS0E7SUFFRSx5QkFBQTtFQUhGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci1jb250YWluZXJ7XHJcbiAgY29sb3I6ICNmZjEzMTM7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzYzKTtcclxuICB6LWluZGV4OiA1MDAwO1xyXG5cclxuICAubWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY0NCk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiA3MnB4IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNiAxLjdzIGluZmluaXRlIGVhc2UsIHJvdW5kIDEuN3MgaW5maW5pdGUgZWFzZTtcclxuICBhbmltYXRpb246IGxvYWQ2IDEuN3MgaW5maW5pdGUgZWFzZSwgcm91bmQgMS43cyBpbmZpbml0ZSBlYXNlO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNiB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbiAgNSUsXHJcbiAgOTUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDEwJSxcclxuICA1OSUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4wODdlbSAtMC44MjVlbSAwIC0wLjQyZW0sIC0wLjE3M2VtIC0wLjgxMmVtIDAgLTAuNDRlbSwgLTAuMjU2ZW0gLTAuNzg5ZW0gMCAtMC40NmVtLCAtMC4yOTdlbSAtMC43NzVlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zMzhlbSAtMC43NThlbSAwIC0wLjQyZW0sIC0wLjU1NWVtIC0wLjYxN2VtIDAgLTAuNDRlbSwgLTAuNjcxZW0gLTAuNDg4ZW0gMCAtMC40NmVtLCAtMC43NDllbSAtMC4zNGVtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDM4JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjM3N2VtIC0wLjc0ZW0gMCAtMC40MmVtLCAtMC42NDVlbSAtMC41MjJlbSAwIC0wLjQ0ZW0sIC0wLjc3NWVtIC0wLjI5N2VtIDAgLTAuNDZlbSwgLTAuODJlbSAtMC4wOWVtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkNiB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbiAgNSUsXHJcbiAgOTUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDEwJSxcclxuICA1OSUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4wODdlbSAtMC44MjVlbSAwIC0wLjQyZW0sIC0wLjE3M2VtIC0wLjgxMmVtIDAgLTAuNDRlbSwgLTAuMjU2ZW0gLTAuNzg5ZW0gMCAtMC40NmVtLCAtMC4yOTdlbSAtMC43NzVlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zMzhlbSAtMC43NThlbSAwIC0wLjQyZW0sIC0wLjU1NWVtIC0wLjYxN2VtIDAgLTAuNDRlbSwgLTAuNjcxZW0gLTAuNDg4ZW0gMCAtMC40NmVtLCAtMC43NDllbSAtMC4zNGVtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDM4JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjM3N2VtIC0wLjc0ZW0gMCAtMC40MmVtLCAtMC42NDVlbSAtMC41MjJlbSAwIC0wLjQ0ZW0sIC0wLjc3NWVtIC0wLjI5N2VtIDAgLTAuNDZlbSwgLTAuODJlbSAtMC4wOWVtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdW5kIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyByb3VuZCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_change_scene_dialog_change_scene_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/change-scene-dialog/change-scene-dialog.component */ 349);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _components_start_machine_dialog_start_machine_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/start-machine-dialog/start-machine-dialog.component */ 3730);
/* harmony import */ var _components_start_csgo_dialog_csgo_start_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/start-csgo-dialog/csgo-start-dialog.component */ 1429);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 6996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__.TooltipModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_change_scene_dialog_change_scene_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ChangeSceneDialogComponent,
        _components_start_machine_dialog_start_machine_dialog_component__WEBPACK_IMPORTED_MODULE_2__.StartMachineDialogComponent,
        _components_start_csgo_dialog_csgo_start_dialog_component__WEBPACK_IMPORTED_MODULE_3__.CsgoStartDialogComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__.TooltipModule] }); })();


/***/ }),

/***/ 349:
/*!*********************************************************************************!*\
  !*** ./src/app/components/change-scene-dialog/change-scene-dialog.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeSceneDialogComponent": () => (/* binding */ ChangeSceneDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/webSocket */ 2227);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);








const _c0 = function (a0) { return { "scene-option--selected": a0 }; };
function ChangeSceneDialogComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangeSceneDialogComponent_div_1_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const scene_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.selectScene(scene_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const scene_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, scene_r4 == ctx_r3.selectedScene));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.previews[scene_r4], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](scene_r4);
} }
function ChangeSceneDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChangeSceneDialogComponent_div_1_div_1_Template, 4, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.data.options);
} }
function ChangeSceneDialogComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const preview = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__.webSocket)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.notificationWebSocket.preview);
class ChangeSceneDialogComponent {
    constructor(dialogRef, data, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.previewSceneImage = "";
        this.selectedScene = "";
        this.previewSceneImage = data.initialImage;
        this.selectedScene = data.selected;
        preview.subscribe(msg => {
            if (msg.Previews)
                this.previews = msg.Previews;
            // this.previewSceneImage = msg.PreviewScene;
        }, err => console.log(err));
    }
    selectScene(scene) {
        if (scene == this.selectedScene) {
            this.selectedScene = "";
            return;
        }
        this.selectedScene = scene;
        this.select(scene);
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
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/obs/change-current-scene?scene=" + this.selectedScene)
            .subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY);
    }
}
ChangeSceneDialogComponent.ɵfac = function ChangeSceneDialogComponent_Factory(t) { return new (t || ChangeSceneDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
ChangeSceneDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangeSceneDialogComponent, selectors: [["dialog-change-scene"]], decls: 12, vars: 3, consts: [[1, "container-fluid", "full-height", "overflow-auto"], ["class", "d-flex flex-row flex-wrap align-items-center justify-content-center", 4, "ngIf", "ngIfElse"], ["loadingPreviews", ""], [1, "container-fluid", "justify-content-center", "align-items-center", "mt-3"], [1, "row", "g-1", "py-2"], [1, "col-12", "col-md-6", "d-flex", "justify-content-center", "align-items-center"], ["mat-dialog-close", "", 1, "btn-kastr"], [1, "btn-kastr", "btn-kastr-red", 3, "disabled", "click"], [1, "d-flex", "flex-row", "flex-wrap", "align-items-center", "justify-content-center"], ["class", "pe-md-3 mb-2 scene-option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pe-md-3", "mb-2", "scene-option", 3, "ngClass", "click"], [1, "img-fluid", "rounded", "mx-auto", "d-block", 3, "src"], [1, "justify-content-center", "align-items-center"]], template: function ChangeSceneDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChangeSceneDialogComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChangeSceneDialogComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangeSceneDialogComponent_Template_button_click_10_listener() { return ctx.onClickOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.previews)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.selectedScene);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 36px;\n  width: 100%;\n  height: 650px;\n  background: #FFFFFF;\n}\n@media (min-width: 300px) and (max-width: 950px) {\n  [_nghost-%COMP%] {\n    padding: 16px;\n  }\n}\n[_nghost-%COMP%]   .scene-option[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .scene-option[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 350px;\n}\n[_nghost-%COMP%]   .scene-option--selected[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], [_nghost-%COMP%]   .scene-option--selected[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 2px solid #E5194A;\n}\n[_nghost-%COMP%]   .scene-option--selected[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  border-top: none;\n}\n[_nghost-%COMP%]   .scene-option--selected[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0px !important;\n  border-bottom-right-radius: 0px !important;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border: 0.435945px solid #F6F7F9;\n  box-sizing: border-box;\n  box-shadow: 0px 0.435945px 0.87189px rgba(16, 24, 40, 0.05);\n  border-radius: 0px 0px 3.48756px 3.48756px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1zY2VuZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBRUEsbUJBQUE7QUFIRjtBQUtFO0VBWkY7SUFhSSxhQUFBO0VBRkY7QUFDRjtBQUlFO0VBQ0UsZUFBQTtBQUZKO0FBSUk7RUFDRSxnQkFBQTtBQUZOO0FBT007RUFDRSx5QkFBQTtBQUxSO0FBUU07RUFDRSxnQkFBQTtBQU5SO0FBU007RUFDRSx5Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVlFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkRBQUE7RUFDQSwwQ0FBQTtBQVZKIiwiZmlsZSI6ImNoYW5nZS1zY2VuZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3NoYXJlZC92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAzNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBoZWlnaHQ6IDY1MHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcblxyXG4gIC5zY2VuZS1vcHRpb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLS1zZWxlY3RlZHtcclxuXHJcbiAgICAgICYgPiBzcGFuLCBpbWcge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRyZWQtdmVsdmV0LTYwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmID4gc3BhbiB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJiA+IGltZ3tcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3BhbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMC40MzU5NDVweCBzb2xpZCAjRjZGN0Y5O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwLjQzNTk0NXB4IDAuODcxODlweCByZ2JhKDE2LCAyNCwgNDAsIDAuMDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAzLjQ4NzU2cHggMy40ODc1NnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1429:
/*!*****************************************************************************!*\
  !*** ./src/app/components/start-csgo-dialog/csgo-start-dialog.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsgoStartDialogComponent": () => (/* binding */ CsgoStartDialogComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 6996);








class CsgoStartDialogComponent {
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
CsgoStartDialogComponent.ɵfac = function CsgoStartDialogComponent_Factory(t) { return new (t || CsgoStartDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
CsgoStartDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CsgoStartDialogComponent, selectors: [["csgo-start-dialog"]], decls: 26, vars: 2, consts: [[1, "mb-4"], [1, "input-group", "mb-5"], ["type", "text", "placeholder", "GOTV*", 1, "form-control", "custom-input", 3, "ngModel", "ngModelChange"], ["tooltip", "If you don't configure hud, it will run with the default values", 2, "font-size", "16px", "width", "16px", "height", "16px"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Counter-Terrorists", 1, "form-control", "custom-input", "me-md-4", "me-sm-0"], ["tooltip", "Upload Counter-Terrorists Logo", 1, "file-upload-button"], ["type", "text", "placeholder", "Terrorists", 1, "form-control", "custom-input", "me-md-4", "me-sm-0"], ["tooltip", "Upload Terrorists Logo", 1, "file-upload-button"], [1, "container-fluid"], [1, "row"], [1, "col-6", "g-1", "pe-1"], ["mat-dialog-close", "", 1, "btn-kastr"], [1, "col-6", "g-1"], [1, "btn-kastr", "btn-kastr-red", 3, "disabled", "click"]], template: function CsgoStartDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "CSGO Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CsgoStartDialogComponent_Template_input_ngModelChange_3_listener($event) { return ctx.ip = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Hud Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CsgoStartDialogComponent_Template_button_click_24_listener() { return ctx.onClickOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.ip);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.ip);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 48px;\n  width: 100%;\n  max-width: 423px;\n  height: 562px;\n  background: #FFFFFF;\n}\n@media (min-width: 300px) and (max-width: 950px) {\n  [_nghost-%COMP%] {\n    padding: 16px;\n  }\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 19.2px;\n  color: #2B323E;\n}\n[_nghost-%COMP%]   .custom-input[_ngcontent-%COMP%] {\n  height: 64px;\n  border: 1px solid #DDE1E6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]   .custom-input-file[_ngcontent-%COMP%] {\n  width: 64px;\n}\n[_nghost-%COMP%]   .file-upload-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  width: 66px;\n  height: 64px;\n  background: #FFFFFF;\n  border: 1px solid #DDE1E6;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzZ28tc3RhcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcc2hhcmVkXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFNQSxtQkFBQTtBQVJGO0FBSUU7RUFaRjtJQWFJLGFBQUE7RUFERjtBQUNGO0FBS0U7RUFDRSxpQkFBQTtFQUNBLGNDakJZO0FEY2hCO0FBTUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFNSTtFQUNFLFdBQUE7QUFKTjtBQVFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBUEoiLCJmaWxlIjoiY3Nnby1zdGFydC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcvc3JjL3NoYXJlZC92YXJpYWJsZXMnO1xyXG5cclxuOmhvc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDQ4cHg7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDIzcHg7XHJcblxyXG4gIGhlaWdodDogNTYycHg7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHJcbiAgaDN7XHJcbiAgICBmb250LXNpemU6IDE5LjJweDtcclxuICAgIGNvbG9yOiAkY29vbC1ncmF5LTEwMDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20taW5wdXR7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRERFMUU2O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgICAmLWZpbGV7XHJcbiAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZpbGUtdXBsb2FkLWJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB3aWR0aDogNjZweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRERFMUU2O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbn1cclxuIiwiJHJlZC12ZWx2ZXQtODA6ICM4OTBGMkM7XHJcbiRyZWQtdmVsdmV0LTcwOiAjQjcxNDNCO1xyXG4kcmVkLXZlbHZldC02MDogI0U1MTk0QTtcclxuJHJlZC12ZWx2ZXQtMzA6ICNGNUEzQjc7XHJcblxyXG4kY29vbC1ncmF5LTEwMDogIzJCMzIzRTtcclxuIl19 */"] });


/***/ }),

/***/ 3730:
/*!***********************************************************************************!*\
  !*** ./src/app/components/start-machine-dialog/start-machine-dialog.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartMachineDialogComponent": () => (/* binding */ StartMachineDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class StartMachineDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartMachineDialogComponent.ɵfac = function StartMachineDialogComponent_Factory(t) { return new (t || StartMachineDialogComponent)(); };
StartMachineDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartMachineDialogComponent, selectors: [["app-start-machine-dialog"]], decls: 8, vars: 0, consts: [[1, "text-kastr-red"], [1, "btn-kastr", "btn-kastr-red"]], template: function StartMachineDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to StreamTV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Remote server is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "off!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Turn on Remote Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 48px;\n  width: 100%;\n  height: 264px;\n  background: #FFFFFF;\n}\n@media (min-width: 300px) and (max-width: 950px) {\n  [_nghost-%COMP%] {\n    padding: 16px;\n  }\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 19.2px;\n  color: #2B323E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LW1hY2hpbmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcc2hhcmVkXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBTUEsbUJBQUE7QUFQRjtBQUdFO0VBVkY7SUFXSSxhQUFBO0VBQUY7QUFDRjtBQUlFO0VBQ0UsaUJBQUE7RUFDQSxjQ2ZZO0FEYWhCIiwiZmlsZSI6InN0YXJ0LW1hY2hpbmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnL3NyYy9zaGFyZWQvdmFyaWFibGVzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0OHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBoZWlnaHQ6IDI2NHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcblxyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTkuMnB4O1xyXG4gICAgY29sb3I6ICRjb29sLWdyYXktMTAwO1xyXG4gIH1cclxufSIsIiRyZWQtdmVsdmV0LTgwOiAjODkwRjJDO1xyXG4kcmVkLXZlbHZldC03MDogI0I3MTQzQjtcclxuJHJlZC12ZWx2ZXQtNjA6ICNFNTE5NEE7XHJcbiRyZWQtdmVsdmV0LTMwOiAjRjVBM0I3O1xyXG5cclxuJGNvb2wtZ3JheS0xMDA6ICMyQjMyM0U7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3780:
/*!*******************************!*\
  !*** ./src/app/interfaces.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MachineState": () => (/* binding */ MachineState),
/* harmony export */   "ObsStateType": () => (/* binding */ ObsStateType),
/* harmony export */   "CounterStikeGameStateType": () => (/* binding */ CounterStikeGameStateType)
/* harmony export */ });
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
    apiUrl: "http://localhost:64590/api",
    notificationWebSocket: {
        state: "ws://localhost:64590/notification/state/subscribe",
        preview: "ws://localhost:64590/notification/preview/subscribe",
        client: "ws://localhost:8080/client/notification/subscribe"
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