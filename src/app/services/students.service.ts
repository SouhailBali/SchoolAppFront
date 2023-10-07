import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public host:string="http://localhost:8080"
  constructor(private httpClient:HttpClient) { }
  public getStudents(/*page:number,size:number*/){
    return this.httpClient.get(this.host+"/studentslist"/*?page="+page+"&size="+size*/);
  }
}
