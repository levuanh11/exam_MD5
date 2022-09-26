import { Component, OnInit } from '@angular/core';
import {TourService} from "../../service/tour.service";
// @ts-ignore
import {Tour} from "../../../models/Tour";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  tours:Tour[]=[]

  constructor(private tourService:TourService) { }

  ngOnInit(): void {
    this.tourService.findAll().subscribe((data)=>{
      this.tours=data
    })
  }

}
