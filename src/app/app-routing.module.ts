import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ServicesComponent } from './components/services/services.component';
import { PostjobsComponent } from './components/employeerdashboard/postjobs/postjobs.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { EmployeerdashboardComponent } from './components/employeerdashboard/employeerdashboard.component';
import { DetailsComponent } from './components/jobs/details/details.component';
import { CvformComponent } from './components/jobs/cvform/cvform.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'naukri',
    pathMatch: 'full',
  },
  {
    path: 'naukri',
    component: LandingpageComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'jobs',
    children: [
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
      {
        path: 'details/cv/:id',
        component: CvformComponent,
      },
    ],
  },

  {
    path: 'companies',
    component: CompaniesComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'dashboard',
    component: EmployeerdashboardComponent,
  },
  {
    path: 'applications',
    component: ApplicationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
