import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpdateService } from './services/empdate.service';
import { EditempComponent } from './editemp/editemp.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from "@clr/angular";
import { DeleteempComponent } from './deleteemp/deleteemp.component';
import { Ng2CompleterModule } from 'ng2-completer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeedetailsComponent,
    EditempComponent,
    DeleteempComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClarityModule,
    Ng2CompleterModule, 
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    EmpdateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
