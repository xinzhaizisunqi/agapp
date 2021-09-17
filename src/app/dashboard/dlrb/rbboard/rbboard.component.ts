import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-rbboard',
  templateUrl: './rbboard.component.html',
  styleUrls: ['./rbboard.component.css']
})
export class RbboardComponent implements OnInit {

 constructor(private userService: UserService) { }

  //test
  users:any;
  host:any = "http://localhost:8080/getUd";
  ngOnInit(): void {

  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.userService
        .searchHeroes(searchTerm,this.host)
        .subscribe(result => {
                this.users = result.data;
        });
    }
  }
}
