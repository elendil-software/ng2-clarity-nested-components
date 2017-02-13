import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-sub1',
  host: { '[class.content-area]': 'true' },
  templateUrl: './sidebar-sub1.component.html',
  styleUrls: ['./sidebar-sub1.component.css']
})
export class SidebarSub1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
