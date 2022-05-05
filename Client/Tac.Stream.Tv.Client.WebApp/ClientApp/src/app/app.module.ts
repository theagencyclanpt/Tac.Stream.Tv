import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChangeSceneDialogComponent } from './components/change-scene-dialog/change-scene-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { StartMachineDialogComponent } from './components/start-machine-dialog/start-machine-dialog.component';
import { CsgoStartDialogComponent } from "./components/start-csgo-dialog/csgo-start-dialog.component";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { Observable, tap } from 'rxjs';
import { IRemoteIp } from "./interfaces";


function initializeAppFactory(httpClient: HttpClient): () => Observable<any> {
  return () => httpClient.get<IRemoteIp>("/api/configuration/remote-api")
    .pipe(
      tap(e => {
        localStorage.setItem("ip", e['ip']);
      })
    );
}

@NgModule({
  declarations: [
    AppComponent,
    ChangeSceneDialogComponent,
    StartMachineDialogComponent,
    CsgoStartDialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    TooltipModule.forRoot()
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    deps: [HttpClient],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
