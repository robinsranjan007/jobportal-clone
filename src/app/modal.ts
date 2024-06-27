import { NumberSymbol } from "@angular/common"

export interface jobsProfile{
    id?:string,
    profileName:string,
    companyName:string,
role:string,
experience:string,
costToCompany:string,
openingLocation:string,
openings:string,
companyLogo:string,
jobDescription:string,
higestEducation:string,
employementType:string,
industryType:string,
department:string,
address:address[],
skills:string[],
detailDescription:string
}

export interface address{
state:string,
city:string,
streetNumber:string,
pincode:string
}


export interface firebase{
    [key:string]:jobsProfile
}



// cv


export interface Curriculumvitae
{
 personalinformation:personalInformation,
 professionalaSummary:string,
 experience:workExperience[],
 education:education[],
 skills:string[],
 certifiation:string[],
 projects:projects[],
 publication:publications,
 languages:string[]
}

export interface personalInformation{
name:string,
address:string,
number:string,
email:string,
}

export interface  workExperience{
jobtitle:string,
companyName:string,
location:string,
startingDate:Date,
EndDate:Date,
}

export interface education{
    degree:string,
    fieldOfStudy:string,
    institutionName:string,
    location:string,
    startDate:Date,
    EndDate:Date,
}

export interface projects{
    projectTitle:string,
    description:string,
    technologiesUsed:string,
}

export interface publications{
    title:string,
    nameofPublications:string,
    date:Date,

}