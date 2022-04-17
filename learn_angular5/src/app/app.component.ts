import { Component, Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { breweries, currencies } from './app.interface';
@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn_angular5';
  currencies: currencies[] = [];
  response:any;
  brewerires: any;
  constructor(public http: HttpClient) {
  }
  load_currenncies(){
    // this.http.get<any>("https://api.coindesk.com/v1/bpi/currentprice.json").subscribe(data=>{
    //   alert(JSON.stringify(data));
    //   //console.log(data);
    //   this.response = (JSON.stringify(data));

    // })
    this.http.get("https://api.openbrewerydb.org/breweries").subscribe(data=>{
      //alert(JSON.stringify(data))
      this.brewerires = data;
    })

    //"https://api.openbrewerydb.org/breweries"
  }
}
