import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public order;
  constructor(public nav: NavbarService) {
  
   }

  ngOnInit() {
    this.nav.show();
  }

 
}
