import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public divid;

  constructor(private router:Router) {
   this.divid=false;
   }

  ngOnInit() {
  }

  public update()
  {
   // this.divid=true;
    debugger;
   alert("We sent activation link to your mail");
        this.router.navigate(['']);
      
  }

}
