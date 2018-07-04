import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
userInfo=new User();
  constructor() { }

  ngOnInit() {
  }

}
