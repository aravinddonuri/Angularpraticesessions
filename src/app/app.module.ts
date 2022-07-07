import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatedrivenformsComponent } from './templatedrivenforms/templatedrivenforms.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventbindingComponent,
    TemplatedrivenformsComponent,
    TwowaydatabindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [EventbindingComponent]
})
export class AppModule { }
