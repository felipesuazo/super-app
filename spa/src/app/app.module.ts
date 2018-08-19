import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { UserListComponent } from './views/user-list/user-list.component';
import {reducers} from './reducers';
import {UserEffect} from './reducers/user.effect';
import {AppRouting} from './app.routing';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffect]),
    AppRouting,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
