import {RouterModule, Routes} from "@angular/router";
import {StudentsComponent} from "./students/students.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

const routes:Routes=[
  {
    path: "students",
    component:StudentsComponent
  },{
    path: '', redirectTo: '/', pathMatch: 'full'
  }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
