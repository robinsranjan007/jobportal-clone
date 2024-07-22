import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { Curriculumvitae } from 'src/app/modal';

@Component({
  selector: 'app-cvform',
  templateUrl: './cvform.component.html',
  styleUrls: ['./cvform.component.css']
})
export class CvformComponent implements OnInit {
  cvform: FormGroup = new FormGroup({});

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {
    this.createCv();
  }

  createCv() {
    this.cvform = new FormGroup({
      personalinformation: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        address: new FormControl(null, [Validators.required]),
        number: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required])
      }),
      professionalSummary: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
      experience: new FormArray([
        new FormGroup({
          jobtitle: new FormControl(null, [Validators.required]),
          companyName: new FormControl(null, [Validators.required]),
          location: new FormControl(null, [Validators.required]),
          startingDate: new FormControl(null, [Validators.required]),
          endDate: new FormControl(null, [Validators.required]),
        })
      ]),
      education: new FormArray([
        new FormGroup({
          degree: new FormControl(null, [Validators.required]),
          fieldOfStudy: new FormControl(null, [Validators.required]),
          institutionName: new FormControl(null, [Validators.required]),
          location: new FormControl(null, [Validators.required]),
          startDate: new FormControl(null, [Validators.required]),
          endDate: new FormControl(null, [Validators.required]),
        })
      ]),
      skills: new FormArray([new FormControl(null, [Validators.required])]),
      certification: new FormArray([new FormControl(null, [Validators.required])]),
      projects: new FormArray([
        new FormGroup({
          projectTitle: new FormControl(null, [Validators.required]),
          description: new FormControl(null, [Validators.required]),
          technologiesUsed: new FormControl(null, [Validators.required]),
        })
      ]),
      publication: new FormArray([
        new FormGroup({
          title: new FormControl(null, [Validators.required]),
          nameofPublications: new FormControl(null, [Validators.required]),
          date: new FormControl(null, [Validators.required]),
        })
      ]),
      languages: new FormArray([new FormControl(null, [Validators.required])])
    });
  }

  get experience(): FormArray {
    return this.cvform.get('experience') as FormArray;
  }

  get education(): FormArray {
    return this.cvform.get('education') as FormArray;
  }

  get skills(): FormArray {
    return this.cvform.get('skills') as FormArray;
  }

  get certification(): FormArray {
    return this.cvform.get('certification') as FormArray;
  }

  get projects(): FormArray {
    return this.cvform.get('projects') as FormArray;
  }

  get publication(): FormArray {
    return this.cvform.get('publication') as FormArray;
  }

  get languages(): FormArray {
    return this.cvform.get('languages') as FormArray;
  }

  submit() {
    this.postCv(this.cvform.value as Curriculumvitae);
    this.cvform.reset()
  }

  addExperience() {
    const exp = new FormGroup({
      jobtitle: new FormControl(null, [Validators.required]),
      companyName: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      startingDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
    });
    this.experience.push(exp);
  }

  deleteExperience(i: number) {
    this.experience.removeAt(i);
  }

  addEducation() {
    const edu = new FormGroup({
      degree: new FormControl(null, [Validators.required]),
      fieldOfStudy: new FormControl(null, [Validators.required]),
      institutionName: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
    });
    this.education.push(edu);
  }

  deleteEducation(i: number) {
    this.education.removeAt(i);
  }

  addSkill() {
    const skill = new FormControl(null, [Validators.required]);
    this.skills.push(skill);
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  addCertification() {
    const cert = new FormControl(null, [Validators.required]);
    this.certification.push(cert);
  }

  removeCertification(i: number) {
    this.certification.removeAt(i);
  }

  addProject() {
    const proj = new FormGroup({
      projectTitle: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      technologiesUsed: new FormControl(null, [Validators.required]),
    });
    this.projects.push(proj);
  }

  removeProject(i: number) {
    this.projects.removeAt(i);
  }

  addPublication() {
    const pub = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      nameofPublications: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
    });
    this.publication.push(pub);
  }

  removePublication(i: number) {
    this.publication.removeAt(i);
  }

  addLanguage() {
    const lang = new FormControl(null, [Validators.required]);
    this.languages.push(lang);
  }

  removeLanguage(i: number) {
    this.languages.removeAt(i);
  }

  postCv(data: Curriculumvitae) {
    this.httpservice.postCv(data).subscribe({
      next: (val) => {
        console.log(val, 'this is in the subscribe');
      },
      error:(err:HttpErrorResponse)=>{
        this.httpservice.openErrorModal(err.message)
      }
    });
  }
}
