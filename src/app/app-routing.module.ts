import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "test",
    pathMatch: "full"
  },
  {
    path: "test",
    loadChildren: () => import("./features/test/test.module").then(v => v.TestModule),
    canActivate: [AuthGuard]
  },
  {
    path: "auth",
    loadChildren: () => import("./features/auth/auth.module").then(v => v.AuthModule)
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
