import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-score',
  templateUrl: './movie-score.component.html',
  styleUrls: ['./movie-score.component.css']
})
export class MovieScoreComponent implements OnInit {

  @Input()
  score: any;

  @Input()
  count: number = 10;  

  ngOnInit(): void {
    this.fixNumber();
  }

  fixNumber(): void {
    this.score = this.score > 0 ? this.score.toFixed(1) : '-';
  }

}
