import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms'; //import FormsModule

import { HttpModule } from '@angular/http'; //import module

import { SearchService } from './search/search.service'; //imports search service

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        HttpModule, //add HttpModule here
        FormsModule
    ],
    //add services (separated out API calls and functions) as providers here
    providers: [SearchService],
    bootstrap: [AppComponent]
})


export class AppModule { }