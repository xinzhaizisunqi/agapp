import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { UserService } from '../../user.service';
import { api } from '../../host-api';
import Swal from 'sweetalert2'

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
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '小票审核已通过',
            showConfirmButton: false,
            timer: 1500
          })
          this.search('1');
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
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '小票审核已失败',
            showConfirmButton: false,
            timer: 1500
          })
        }
        this.search('1');
      });
  }



  delete(openid: string) {
    let host = api.serviceDelete;
    const user: User = { openid ,host} as User;
    this.userService.delete(user)
      .subscribe(result => {
        if (result.code == 0) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '删除用户信息成功',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
  }
}
