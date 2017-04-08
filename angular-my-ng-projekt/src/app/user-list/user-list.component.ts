import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
private names:string[];
  constructor() { 
    this.names = ["aaa", "bbb", "ccc", "ddd"];
  }

  ngOnInit() {
  }

}
