import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brews',
  templateUrl: './brews.component.html',
  //styleUrls: ['./brews.component.css'],
  inputs:['brew']
})
export class BrewsComponent implements OnInit {
  @Input() brew:any;
  constructor() { }

  ngOnInit(): void {
  }

}
