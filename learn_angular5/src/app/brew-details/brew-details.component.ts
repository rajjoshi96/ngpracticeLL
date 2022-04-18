import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brew-details',
  templateUrl: './brew-details.component.html',
  //styleUrls: ['./brew-details.component.css'],
  inputs:['brew']
})
export class BrewDetailsComponent implements OnInit {
  @Input() brew:any;
  constructor() { }

  ngOnInit(): void {
  }

}
