import {Component, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
    links=[
        {title:'Home',path:'/'},
        {title:'Students',path:'/students'},
        {title:'Info',path:'/'}
    ];
    activeLink = this.links[0];
    background: ThemePalette = undefined;
    protected readonly undefined = undefined;

    ngOnInit(): void {
    }
}
