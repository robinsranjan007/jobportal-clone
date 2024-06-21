import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-descriptionmodal',
  templateUrl: './descriptionmodal.component.html',
  styleUrls: ['./descriptionmodal.component.css']
})
export class DescriptionmodalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public ModalData:string) { }

  detailsDescription:string=''

  ngOnInit(): void {
    this.detailsDescription=this.ModalData
  }

}
