import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnav-main',
  host: { '[class.my-main-container]': 'true' },
  templateUrl: './subnav-main.component.html',
  styleUrls: ['./subnav-main.component.css']
})
export class SubnavMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
