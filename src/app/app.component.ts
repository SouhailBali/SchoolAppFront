import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SchoolAppFront';

  ngOnInit(): void {
  }
  constructor(public router:Router) {
  }
}
