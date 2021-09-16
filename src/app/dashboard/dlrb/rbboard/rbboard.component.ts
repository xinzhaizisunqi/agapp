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

 // users: User[];
  users:any;
  ngOnInit(): void {

  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.userService
        .searchHeroes(searchTerm)
        .subscribe(result => {
                this.users = result.data;
        });
    }
  }
}