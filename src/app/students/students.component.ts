import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableDataSourcePageEvent} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {StudentsService} from "../services/students.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements AfterViewInit {
  displayedColumns: string[] = ['image','id', 'name', 'surname', 'age','DateOfBirth','Actions'];
  public students: any;
  // @ts-ignore
  dataSource = new MatTableDataSource<PeriodicElement>();
  constructor(public studentService:StudentsService, private router:Router){

  }
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.OnGetStudents();
    this.dataSource.paginator=this.paginator;
  }
  OnGetStudents(){
    this.studentService.getStudents(/*this.currentPage,this.size*/).subscribe(
        data=>{
          // @ts-ignore
          this.students=data;
          this.dataSource.data=this.students;
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource)
    },err=>{
          console.log(err);
    })
  }

  OnEditStudent(element: any) {
    console.log(element);
    this.router.navigateByUrl("/edit-student/"+element.id );

  }
}

export interface PeriodicElement {
  image: string;
  name: string;
  id: number;
  surname: number;
  age: number;
  DateOfBirth: Date;
  Actions: string;
}






