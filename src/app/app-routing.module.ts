import {RouterModule, Routes} from "@angular/router";
import {StudentsComponent} from "./students/students.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EditStudentComponent} from "./edit-student/edit-student.component";

const routes:Routes=[
  {
    path: "students",
    component:StudentsComponent
  },{
    path: '', redirectTo: '/', pathMatch: 'full'
  },{
    path: "edit-student/:id",
    component:EditStudentComponent
  }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
