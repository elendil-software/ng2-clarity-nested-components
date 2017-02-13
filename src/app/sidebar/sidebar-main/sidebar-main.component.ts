import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-main',
  host: { '[class.content-container]': 'true' },
  templateUrl: './sidebar-main.component.html',
  styleUrls: ['./sidebar-main.component.css']
})
export class SidebarMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
