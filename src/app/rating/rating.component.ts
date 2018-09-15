import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {RatingService} from "../services/rating.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  ratings$: Observable<any>;

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.loadAllRatings();
  }

  private loadAllRatings() {
    this.ratings$ = this.ratingService.getRatings();
  }

}
