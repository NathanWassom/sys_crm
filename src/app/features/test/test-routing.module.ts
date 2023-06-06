import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StepperComponent} from "./components/stepper/stepper.component";
import {I18nComponent} from "./components/i18n/i18n.component";

const routes: Routes = [
  {
    path: "",
    component: StepperComponent
  },
  {
    path: "i18n",
    component: I18nComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
