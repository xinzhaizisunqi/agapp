import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { UserService } from '../../user.service';
import { api } from '../../host-api';

@Component({
  selector: 'app-rbboard',
  templateUrl: './rbboard.component.html',
  styleUrls: ['./rbboard.component.css']
})
export class RbboardComponent implements OnInit {

 constructor(private userService: UserService) { }

  //test
  users:any;

  ngOnInit(): void {

    this.search('1');

  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.userService
        .searchHeroes(searchTerm,api.serviceGetuser)
        .subscribe(result => {
                this.users = result.data;
        });
    }
  }

  pass(openid: string) {
    let host = api.serviceCheck;
    let status = 'PASS';
    const user: User = { openid ,host,status} as User;
    this.userService.pass(user)
      .subscribe(result => {
        if (result.code == 0) {
          alert("审核通过");
        }
      });
  }

  fail(openid: string) {
    let host = api.serviceCheck;
    let status = 'FAIL';
    const user: User = { openid ,host,status} as User;
    this.userService.fail(user)
      .subscribe(result => {
        if (result.code == 0) {
          alert("审核失败");
        }
      });
  }



  delete(openid: string) {
    let host = api.serviceDelete;
    const user: User = { openid ,host} as User;
    this.userService.delete(user)
      .subscribe(result => {
        if (result.code == 0) {
          alert("删除成功");
        }
      });
  }
}
