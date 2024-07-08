import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,   } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { Curriculumvitae } from 'src/app/modal';

@Component({
  selector: 'app-appications-details',
  templateUrl: './appications-details.component.html',
  styleUrls: ['./appications-details.component.css'],
})
export class AppicationsDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private httpservice: HttpService
  ) {}

  cvId: string | null = '';
  cvDetails!:Curriculumvitae|undefined;
  loadspinner:boolean=false;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cvId = params.get('id');
      this.getCvData();
    });
  }

  getCvData() {
    this.loadspinner=true;
    this.httpservice.getCv().subscribe({
      next: (val) => {
       this.cvDetails= val.find((item) => item.id === this.cvId)
        this.loadspinner=false
      },
      error:(err)=>{
        this.httpservice.openErrorModal(err.message)
        this.loadspinner=false
      }
    });
  }
}
