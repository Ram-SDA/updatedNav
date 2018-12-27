import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public login()
  {
    var usertype=1;
    debugger;
    if(usertype== 1)
    {
     // sessionStorage.setItem("user","1");
    this.router.navigate(['/dashboard']);
    }
    else if(usertype == 2)
    {
      //sessionStorage.setItem("user","2");
      this.router.navigate(['/userpage']);
    }
  }

}
