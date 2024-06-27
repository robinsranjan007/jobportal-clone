import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Curriculumvitae } from 'src/app/modal';

@Component({
  selector: 'app-cvform',
  templateUrl: './cvform.component.html',
  styleUrls: ['./cvform.component.css']
})
export class CvformComponent implements OnInit {
[x: string]: any;

  constructor() { }


cvform:FormGroup=new FormGroup({})

  ngOnInit(): void {

    this.createCv()
  }


createCv()
{
  this.cvform=new FormGroup({
    personalinformation: new FormGroup({
      name:new FormControl(null,[Validators.required]),
      address:new FormControl(null,[Validators.required]),
      number:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required])
    }),
    professionalSummary:new FormControl(null,[Validators.required,Validators.maxLength(200)]),
    workExperience:new FormArray([
      new FormGroup({
        jobtitle:new FormControl(null,[Validators.required]),
        companyName:new FormControl(null,Validators.required),
        location:new FormControl(null,[Validators.required]),
        startingDate:new FormControl(null,[Validators.required]),
        EndDate:new FormControl(null,[Validators.required]),
      })
    ]),
    education:new FormArray([
      new FormGroup({
        degree:new FormControl(null,[Validators.required]),
        fieldOfStudy:new FormControl(null,[Validators.required]),
        institutionName:new FormControl(null,[Validators.required]),
        location:new FormControl(null,[Validators.required]),
        startDate:new FormControl(null,[Validators.required]),
        EndDate:new FormControl(null,[Validators.required]),
      })
    ]),
    skills:new FormArray([new FormControl(null, [Validators.required])]),
    certifiation:new FormArray([new FormControl(null, [Validators.required])]),
    projects:new FormArray([
      new FormGroup({
        projectTitle:new FormControl(null,[Validators.required]),
        description:new FormControl(null,[Validators.required]),
        technologiesUsed:new FormControl(null,[Validators.required]),
      })
    ]),

    publication:new FormArray([
      new FormGroup({
        title:new FormControl(null,[Validators.required]),
        nameofPublications:new FormControl(null,[Validators.required]),
        date:new FormControl(null,[Validators.required]),
      })
    ]),


    languages:new FormArray([new FormControl(null,[Validators.required])])


  })
}



// getters for arrays

get workExperience(): FormArray {
  return this.cvform.get('workExperience') as FormArray;
}

get education():FormArray{
  return this.cvform.get('education') as FormArray;
}

get skills():FormArray
{
  return this.cvform.get('skills') as FormArray;
}
get certifiation():FormArray
{
  return this.cvform.get('certifiation') as FormArray;
}
get projects():FormArray
{
  return this.cvform.get('projects') as FormArray;
}

get publication():FormArray
{
  return this.cvform.get('publication') as FormArray;
}


get languages():FormArray
{
  return this.cvform.get('languages') as FormArray;
}


submit()
{
  console.log(this.cvform.value as Curriculumvitae);
  
}


// dynamically adding 

addWorkExperience()
{
const exp=new FormGroup({
  jobtitle:new FormControl(null,[Validators.required]),
  companyName:new FormControl(null,Validators.required),
  location:new FormControl(null,[Validators.required]),
  startingDate:new FormControl(null,[Validators.required]),
  EndDate:new FormControl(null,[Validators.required]),
});

(this.cvform.get('workExperience') as FormArray).push(exp);
}


deleteWorkExperience(i:number)
{
  (this.cvform.get('workExperience') as FormArray).removeAt(i);
}

addEducation()
{
  const edtech=new FormGroup({
    degree:new FormControl(null,[Validators.required]),
    fieldOfStudy:new FormControl(null,[Validators.required]),
    institutionName:new FormControl(null,[Validators.required]),
    location:new FormControl(null,[Validators.required]),
    startDate:new FormControl(null,[Validators.required]),
    EndDate:new FormControl(null,[Validators.required]),
  });

 ( this.cvform.get('education') as FormArray).push(edtech)
  
}

deleteEducation(i:number)
{
  ( this.cvform.get('education') as FormArray).removeAt(i)
}


addSkills()
{
  const skill = new FormControl(null,[Validators.required]);

  (this.cvform.get('skills') as FormArray).push(skill)
 
}


removeSkills(i:number)
{
(  this.cvform.get('skills') as FormArray).removeAt(i)
 
}


addCertifiation()
{
  const certificate = new FormControl(null,[Validators.required]);
  (this.cvform.get('certifiation') as FormArray).push(certificate)
}

removeCertification(i:number)
{
  (this.cvform.get('certifiation') as FormArray).removeAt(i)
}

addprojects()
{
  const projects=  new FormGroup({
    projectTitle:new FormControl(null,[Validators.required]),
    description:new FormControl(null,[Validators.required]),
    technologiesUsed:new FormControl(null,[Validators.required]),
  });

(this.cvform.get('projects') as FormArray).push(projects)

}


removeProjects(i:number)
{

  (this.cvform.get('projects') as FormArray).removeAt(i)
}

addpublication()
{
  const publication =  new FormGroup({
    title:new FormControl(null,[Validators.required]),
    nameofPublications:new FormControl(null,[Validators.required]),
    date:new FormControl(null,[Validators.required]),
  });

  (this.cvform.get('publication') as FormArray).push(publication)
}

removePublication(i:number)
{
  (this.cvform.get('publication') as FormArray).removeAt(i)
}


addLanguages()
{
  const lang=new FormControl(null,[Validators.required]);
  (this.cvform.get('language')as FormArray).push(lang)
}

removeaddLanguages(i:number)
{
  (this.cvform.get('language') as FormArray).removeAt(i)
}


}
