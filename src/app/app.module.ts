import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { CpaiComponent } from './components/cpai/cpai.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { IfrenderComponent } from './components/ifrender/ifrender.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    CpaiComponent,
    DiretivasComponent,
    IfrenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
