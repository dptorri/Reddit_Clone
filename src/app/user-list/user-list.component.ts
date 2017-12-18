import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
names: string[]; //<--creates an array of strings

  constructor() {
    this.names = ['Julia', 'Helen','Anna'];
   }
  ngOnInit() {
  }

}
