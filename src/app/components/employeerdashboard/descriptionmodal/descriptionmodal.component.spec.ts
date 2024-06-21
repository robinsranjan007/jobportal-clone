import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionmodalComponent } from './descriptionmodal.component';

describe('DescriptionmodalComponent', () => {
  let component: DescriptionmodalComponent;
  let fixture: ComponentFixture<DescriptionmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
