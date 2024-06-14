import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-postjobs',
  templateUrl: './postjobs.component.html',
  styleUrls: ['./postjobs.component.css'],
})
export class PostjobsComponent implements OnInit {
  constructor() {}

  reactiveform: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.generateForm()
    this.submit()
  }

  generateForm() {
    this.reactiveform = new FormGroup({
      profileName: new FormControl(null, [Validators.required]),
      companyname: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
      experience: new FormControl(null, [Validators.required]),
      costToCompany: new FormControl(null, [Validators.required]),
      openingLocation: new FormControl(null, [Validators.required]),
      openings: new FormControl(null, [Validators.required]),
      companyLogo: new FormControl(null, [Validators.required]),
      jobDescription: new FormControl(null, [Validators.required]),
      higestEducation: new FormControl(null, [Validators.required]),
      employementType: new FormControl(null, [Validators.required]),
      IndustryType: new FormControl(null, Validators.required),
      department: new FormControl(null, [Validators.required]),

      address: new FormGroup({
        state: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        streetNumber: new FormControl(null, [Validators.required]),
        pincode: new FormControl(null, [Validators.required]),
      }),

      skills: new FormArray([]),
    });
  }



  submit()
  {
    console.log(this.reactiveform);
    console.log(this.reactiveform.controls);
    console.log(this.reactiveform.controls['experience'],'this is the controls');

    console.log(this.reactiveform.get('experience'));
    
    
  }



}
