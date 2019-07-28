import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Angular-first';

  constructor(private router: Router){}
  ngOnInit() {
    const userName = localStorage.getItem("userName");
    if(!userName) this.router.navigate(['login']);
  }
}
