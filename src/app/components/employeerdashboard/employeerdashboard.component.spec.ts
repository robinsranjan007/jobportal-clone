import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerdashboardComponent } from './employeerdashboard.component';

describe('EmployeerdashboardComponent', () => {
  let component: EmployeerdashboardComponent;
  let fixture: ComponentFixture<EmployeerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeerdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
