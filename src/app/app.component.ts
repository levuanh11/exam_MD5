import { Component } from '@angular/core';
import {TourService} from "./service/tour.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam_md5';
  constructor(private tourService:TourService) { }

  ngOnInit(): void {
  }
}
