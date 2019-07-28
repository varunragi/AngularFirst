import { Component, OnInit } from '@angular/core';
import { EmpdateService } from '../services/empdate.service';
import { ToastrService } from 'ngx-toastr';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})

export class EmployeedetailsComponent implements OnInit {
  empList: any;
  id: any;
  deleteConfirmCheck: any;

  protected searchStr: string;
  protected dataService: CompleterData;

  
  constructor(private empdateservice: EmpdateService,
    private toastr: ToastrService,
    private completerService: CompleterService
  ) {
    this.dataService = completerService.local(this.empList, 'employee_name', 'employee_name')
   }

  ngOnInit() {
    this.getEmpDetails();
  }

  getEmpDetails() {
    this.empdateservice.getEmpDetails().subscribe(
      (data) => {
        this.empList = data;
      }
    )
  }

  deleteEmpDetails(id?: any) {
    this.empdateservice.deleteEmpDetails(id).subscribe(
      () => {
        this.deleteConfirmCheck = null;
        this.getEmpDetails();
        this.toastr.success('employee deleted successfully');
      },
      (error) => {
        this.toastr.error(error);
      }
    )
  }

  

}

