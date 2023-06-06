import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StepperComponent} from './features/test/components/stepper/stepper.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
