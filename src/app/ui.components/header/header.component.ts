import { Component, OnInit } from '@angular/core';
import { faCoffee, faAddressBook, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'app';
  faAddressBook = faAddressBook;
  faCoffee = faCoffee;
  faCalendarPlus = faCalendarPlus;
  constructor() { }

  ngOnInit() {
  }

}
