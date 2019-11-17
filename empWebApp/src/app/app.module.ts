import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import {FormsModule} from '@angular/forms';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
@NgModule({
  declarations: [
    AppComponent,
    NewEmpComponent,
    ViewEmpComponent,
    UpdateEmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
