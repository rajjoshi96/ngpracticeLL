import { Component, Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { breweries, currencies } from './app.interface';
@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'learn_angular5';
  currencies: currencies[] = [];
  response:any;
  brewerires: breweries[]=[];
  artists: any;
  currentBrew:any;

  constructor(public http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get("https://api.openbrewerydb.org/breweries").subscribe(data=>{
      //alert(JSON.stringify(data))
      this.response = data;
    })
  }


  showBrewery( item:any){
    //console.log(e);
    this.artists = item.name;
    item.highlight = !item.highlight;
    this.currentBrew = item;
  }
}
