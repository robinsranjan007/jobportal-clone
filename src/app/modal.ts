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