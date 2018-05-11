import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module'
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ApiService} from './_services/api-service/api.service';
import { HttpClientModule} from '@angular/common/http';
import { DialogSpecificComponent } from './_dialogs/dialog-specific/dialog-specific.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './_services/user-service/user.service';
import { StorageService } from './_services/storage-service/storage.service';
import { LocalStorageService } from 'ngx-webstorage';
import {AuthGuard} from './AuthGuard';


@NgModule({
  declarations: [
    AppComponent,
    DialogSpecificComponent,
    DetailedViewComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQlXYF1tEzBYjs7a2ELbtt6DxTUUu1miU'
    }),
    ReactiveFormsModule
  ],
  providers: [ApiService, UserService, StorageService, LocalStorageService, AuthGuard],
  entryComponents: [DialogSpecificComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
