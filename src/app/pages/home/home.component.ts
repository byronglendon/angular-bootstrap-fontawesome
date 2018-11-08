import { Component, OnInit } from '@angular/core';
import { faCoffee, faAddressBook, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faAddressBook = faAddressBook;
  faCoffee = faCoffee;
  faCalendarPlus = faCalendarPlus;
  constructor() { }

  ngOnInit() {
  }

}
