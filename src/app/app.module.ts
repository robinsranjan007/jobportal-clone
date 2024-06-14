import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ServicesComponent } from './components/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 
import { FooterComponent } from './components/footer/footer.component';
import { PostjobsComponent } from './components/employeerdashboard/postjobs/postjobs.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { EmployeerdashboardComponent } from './components/employeerdashboard/employeerdashboard.component';
import { ReactiveFormsModule} from '@angular/forms';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    JobsComponent,
    CompaniesComponent,
    ServicesComponent,
 
    FooterComponent,
      PostjobsComponent,
      ApplicationsComponent,
      EmployeerdashboardComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   
 }
