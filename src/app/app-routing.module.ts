import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EditempComponent } from './editemp/editemp.component';
import { DeleteempComponent } from './deleteemp/deleteemp.component';

const routes: Routes = [
  { path: 'login' , component: LoginComponent} ,
  { path: 'employeedetails', component: EmployeedetailsComponent },
  { path: 'employeedetails/:id', component:EditempComponent},
  { path: 'create', component: DeleteempComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
