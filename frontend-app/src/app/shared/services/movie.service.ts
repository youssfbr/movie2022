import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { environment } from '@app/../environments/environment'; //.prod

import { Movie } from '@app/shared/models/movie';
import { Score } from '@app/shared/models/score';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  apiUrl: string = environment.apiURLBase + '/api/v1';  

  constructor(private http: HttpClient) { }

  pageMovies(pageNumber: number): Observable<Movie[]> { 
    return this.http
      .get<Movie[]>(`${this.apiUrl}/movies/?size=12&page=${pageNumber}&sort=title`)
      .pipe(take(1));
  }

  getMovieById(movieId: number): Observable<Movie> {
    return this.http
      .get<Movie>(`${this.apiUrl}/movies/${movieId}`)
      .pipe(take(1));
  }

  updateScore(score: Score): Observable<Score> {
    return this.http
      .put<Score>(`${this.apiUrl}/scores`, score)
      .pipe(take(1));
  }

}
