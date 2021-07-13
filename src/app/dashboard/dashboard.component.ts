import { Component, OnInit } from '@angular/core';

import { User } from './User';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  users: User[] = [];

  ngOnInit(): void {

    const user: User = {openid:"123", name:"qiqi",
      link:"www.baidu.com", isNew:true, count:15, shop:"mark"} as unknown as User;
    this.users.push(user);


  }

}
