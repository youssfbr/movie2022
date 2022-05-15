import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html'
})
export class StarComponent implements OnInit {

  @Input()
  fill: any;

  starFill: string = "";  

  ngOnInit(): void {
    this.star(this.fill);    
  }

  star(fill: number): void {
    if (fill === 0) {
      this.starFill = "star-empty.svg";
    }
    else if (fill === 1) {
      this.starFill = "star-full.svg";
    }
    else {
      this.starFill = "star-half.svg";
    }
  }

}
