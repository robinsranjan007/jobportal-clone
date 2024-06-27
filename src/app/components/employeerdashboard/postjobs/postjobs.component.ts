import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { jobsProfile } from 'src/app/modal';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-postjobs',
  templateUrl: './postjobs.component.html',
  styleUrls: ['./postjobs.component.css'],
})
export class PostjobsComponent implements OnInit {
  constructor(private ref : MatDialogRef<PostjobsComponent>) {

  }


reactiveform: FormGroup = new FormGroup({});
 



  ngOnInit(): void {
    this.generateForm();
   
    

  }

   



  get skills() {
    return this.reactiveform.get('skills') as FormArray;
  }

  get address() {
    return this.reactiveform.get('address') as FormArray;
  }

  generateForm() {
    this.reactiveform = new FormGroup({
      profileName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      companyName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      role: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      experience: new FormControl(null, [Validators.required]),
      costToCompany: new FormControl(null, [Validators.required]),
      openingLocation: new FormControl(null, [Validators.required]),
      openings: new FormControl(null, [Validators.required]),
      companyLogo: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      jobDescription: new FormControl(null, [Validators.required]),
      higestEducation: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      employementType: new FormControl(null, [Validators.required]),
      industryType: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required]),

      address: new FormArray([
        new FormGroup({
          state: new FormControl(null, [
            Validators.required,
            Validators.minLength(3),
          ]),
          city: new FormControl(null, [
            Validators.required,
            Validators.minLength(3),
          ]),
          streetNumber: new FormControl(null, [
            Validators.required,
            Validators.minLength(3),
          ]),
          pincode: new FormControl(null, [
            Validators.required,
            Validators.minLength(3),
          ]),
        }),
      ]),
      skills: new FormArray([new FormControl(null, [Validators.required])]),
      detailDescription:new FormControl(null)
    });
  }

 
  submit() {
   
    this.ref.close(this.reactiveform.value as jobsProfile)
    
  }



  addskill() {
    // get method gives formcontrol,formGroup and formarray and all this is a child class of the abstractcontrol now get method will give you skills but as a abstractcontrol but we need it as a formarray so we type caste it
    (this.reactiveform.get('skills') as FormArray).push(
      new FormControl(null, [Validators.required])
    );
  }

  removeskills(id: number) {
    (this.reactiveform.get('skills') as FormArray).removeAt(id);
  }

  addLocation() {
    const frmgrp = new FormGroup({
      state: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      city: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      streetNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      pincode: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

    (this.reactiveform.get('address') as FormArray).push(frmgrp);
  }

  deleteLocation(i: number) {
    (this.reactiveform.get('address') as FormArray).removeAt(i);
  }


}
