import { Component, OnInit } from '@angular/core';
import { EmpdateService } from '../services/empdate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteemp',
  templateUrl: './deleteemp.component.html',
  styleUrls: ['./deleteemp.component.scss']
})
export class DeleteempComponent implements OnInit {
  employee_name: any;
  employee_salary: any;
  employee_age: any;

  constructor(private empdateservice: EmpdateService, 
    private route: ActivatedRoute, private router: Router  )
    
    { }

  ngOnInit() {
  }

  createEmp()
  {
    const body = {
       name: this.employee_name,
      salary: this.employee_salary,
      age: this.employee_age
    }
    
    this.empdateservice.createEmp(body).subscribe(
      (data) => {
        console.log(data);
        console.log('employee created successfully.');
        this.router.navigate(['employeedetails'])
      }
    )

     }


  }

