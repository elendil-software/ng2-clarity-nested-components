import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnav-sidebar',
  host: { '[class.content-container]': 'true' },
  templateUrl: './subnav-sidebar.component.html',
  styleUrls: ['./subnav-sidebar.component.css']
})
export class SubnavSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
