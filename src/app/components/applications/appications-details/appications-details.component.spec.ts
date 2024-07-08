import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppicationsDetailsComponent } from './appications-details.component';

describe('AppicationsDetailsComponent', () => {
  let component: AppicationsDetailsComponent;
  let fixture: ComponentFixture<AppicationsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppicationsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppicationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
