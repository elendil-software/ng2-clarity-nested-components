import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  host: { '[class.content-container]': 'true' },
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
