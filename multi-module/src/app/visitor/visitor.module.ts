import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { VisitorRoutingModule } from './visitor-routing.module';

@NgModule({
  declarations: [ContactComponent, AboutComponent],
  imports: [
    CommonModule,
    VisitorRoutingModule
  ]
})
export class VisitorModule {
  constructor() {
    console.log('VisitorModule is loaded.');
  }
 }
