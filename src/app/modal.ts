 

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

export interface Curriculumvitae {
    id?: string;
    personalinformation: PersonalInformation;
    professionalSummary: string;
    experience: WorkExperience[];
    education: Education[];
    skills: string[];
    certification: string[]; // Corrected typo
    projects: Projects[];
    publication: Publications[]; // Corrected typo
    languages: string[];
  }
  
  export interface PersonalInformation {
    name: string;
    address: string;
    number: string;
    email: string;
  }
  
  export interface WorkExperience {
    jobtitle: string;
    companyName: string;
    location: string;
    startingDate: Date;
    endDate: Date; // Corrected typo
  }
  
  export interface Education {
    degree: string;
    fieldOfStudy: string;
    institutionName: string;
    location: string;
    startDate: Date;
    endDate: Date; // Corrected typo
  }
  
  export interface Projects {
    projectTitle: string;
    description: string;
    technologiesUsed: string;
  }
  
  export interface Publications {
    title: string;
    nameofPublications: string;
    date: Date;
  }
  
 