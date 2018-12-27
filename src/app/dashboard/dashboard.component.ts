import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public order;
  constructor() {
   this.navhide()
   }

  ngOnInit() {
  }

  navhide()
  {
    // var user=sessionStorage.getItem("user");
    // if(user == "1")
    // {
    //   this.order=false;
    // }
    // else if(user == "2")
    // {
    //   this.order=true;
    // }
  }
}
