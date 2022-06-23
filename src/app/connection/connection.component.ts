import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  isLogin: boolean | undefined;
  isSignin: boolean = true;

  constructor() { }


  isLoginHome(){
    this.isSignin = false;
    this.isLogin = true;
  }

  ngOnInit() {
  }

}
