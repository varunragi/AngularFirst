import { Component, OnInit } from '@angular/core';
import { EmpdateService } from '../services/empdate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.scss']
})
export class EditempComponent implements OnInit {
  empForm: FormGroup
  empList: any;
  employee_name: any;
  employee_salary: any;
  employee_age: any;
  id: any;

  constructor(private empdateservice: EmpdateService, private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit() {
      this.empForm = this.fb.group({
        'employee_name': [''],
        'employee_salary': [''],
        'employee_age': ['']
    });
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.getEmpDetail(this.id);
      })

  };

  getEmpDetail(id?: any) {
    this.empdateservice.getEmpDetail(id).subscribe(
      (data) => {
        this.empList = data;
        this.employee_name = this.empList.employee_name;
        this.employee_salary = this.empList.employee_salary;
        this.employee_age = this.empList.employee_age;
      },
      (error) => {
      })
  };

  deleteEmpDetails(id?: any) {
    this.empdateservice.deleteEmpDetails(id).subscribe(
      () => {
        console.log('employee deleted successfully.');
        this.router.navigate(['employeedetails'])
      }
    )
  };

  updateEmpDetails(id?: any) {
     const body = {
      name: this.employee_name,
      salary: this.employee_salary,
      age: this.employee_age
    }
    this.empdateservice.updateEmpDetails(id, body).subscribe(
      () => {
        console.log('employee updated successfully.');
        this.router.navigate(['employeedetails'])
      }
    )
  }


}




