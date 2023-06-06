import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestRoutingModule} from './test-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {TestService} from "./services/test.service";
import { I18nComponent } from './components/i18n/i18n.component';


@NgModule({
  declarations: [
  
    I18nComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule
  ],
  providers: [
    TestService
  ]
})
export class TestModule { }
