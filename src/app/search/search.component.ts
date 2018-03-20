import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  
  searchSubject = new Subject();
  weather; //add the public property here

  constructor(
    //makes this available only in this class
    //sets the searchService function from search.service to a variable to use only in this class
      private searchService: SearchService
  ) { }

  findWeather(zip){
    this.searchSubject.next(zip);
  }

//this will run after the virtual DOM has been created
  ngOnInit() {
    this.searchSubject
    //waits one second before submitted API call
    .debounceTime(1000)
    //checks against the last API call and prevents immediate duplicate calls
    .distinctUntilChanged()
    //sets up a listener for the publish event (the keyup event on the form input from html)
    .subscribe(zip => {
      console.log(zip);
    // .toPromise() **replacing this promise with a publish/subscribe relationship (allows for multiple executions)
    //change .then to .subscribe to set a listener for any time this data is manipulated
    this.searchService.createAPIObservable(zip)
    .subscribe(response => this.weather = response.json()); // use it here
    })
  }
  
}