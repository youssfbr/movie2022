import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '@app/shared/models/movie';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html'
})
export class MovieCardComponent {

  @Input()
  movie = {} as Movie; 

  constructor(
    private router: Router,
  ) { }  

  avaliar(id: number): void {
    if (id) this.router.navigate([`/movie-form/${id}`]);    
  }

}
