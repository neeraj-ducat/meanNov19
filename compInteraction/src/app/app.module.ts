import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { DumbOneComponent } from './dumb-one/dumb-one.component';
import { DumbTwoComponent } from './dumb-two/dumb-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbOneComponent,
    DumbTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
