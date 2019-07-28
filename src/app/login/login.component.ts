import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: any;
  password: any;
  loginForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      'userName': ['', Validators.required],
      'password': ['']
    });

  }

  ngOnInit() {

  }
  employeedet() {
    if (this.userName === 'employee' && this.password === 'employee') {
      this.toastr.success('Log Sucuss');
      localStorage.setItem("userName", this.userName);
      this.router.navigate(['employeedetails']);
    } else {
      this.toastr.error('Please enter proper username and password');
    }

  }
}
