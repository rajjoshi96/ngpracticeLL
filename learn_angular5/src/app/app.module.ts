import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrewsComponent } from './brews/brews.component';
import { SearchBrewPipe } from './search-brew.pipe';
import { BrewDetailsComponent } from './brew-details/brew-details.component';
@NgModule({
  declarations: [
    AppComponent,
    BrewsComponent,
    SearchBrewPipe,
    BrewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
