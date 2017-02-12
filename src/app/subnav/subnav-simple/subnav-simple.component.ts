import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnav-simple',
  host: { '[class.content-container-custom]': 'true' },
  templateUrl: './subnav-simple.component.html',
  styleUrls: ['./subnav-simple.component.css']
})
export class SubnavSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
