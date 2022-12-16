import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { EmpTreeComponent } from './emp-tree/emp-tree.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeadNavComponent } from './head-nav/head-nav.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsedMaterialModule } from '../material.modules';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { BASE_PATH } from 'build/openapi/variables';
import { SalMinimalComponent } from './sal-minimal/sal-minimal.component';
import { SalChangerComponent } from './sal-changer/sal-changer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpTreeComponent,
    EmpDetailsComponent,
    PageNotFoundComponent,
    HeadNavComponent,
    SalMinimalComponent,
    SalChangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    UsedMaterialModule
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
