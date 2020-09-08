import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainComponent } from './components/train/train.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
