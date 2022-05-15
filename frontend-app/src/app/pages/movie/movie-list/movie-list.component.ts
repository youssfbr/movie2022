import { Component, Input, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { Movie } from '@app/shared/models/movie';
import { MoviePage } from '@app/shared/models/movie-page';

import { MovieService } from '@app/shared/services/movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styles: [
  ]
})
export class MovieListComponent implements OnInit {

  movies : Movie[] = [];
  moviePage = {} as MoviePage;  
  pageNumber: number = 0;
 
  constructor(
    private movieService: MovieService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.pageMovies();
  } 

  changePage(event: number) { 
    this.pageNumber = event;
    this.pageMovies();
  }

  pageMovies(): void {

    this.spinner.show();

    this.movieService.pageMovies(this.pageNumber).subscribe(

      (movies: any) => {
        
        this.pageNumber = movies.number;        
        this.movies = movies.content as Movie[];
        this.moviePage = movies;
      },
      (err: any) => {
        this.error(err, 'Ocorreu um erro ao carregar os dados!')
      }
    ).add(() => this.spinner.hide());
  };

  private error(err?: any, msg?: string): void {   

    this.toastr.clear();
    this.toastr.toastrConfig.disableTimeOut = true;

    (err.error.erros)
        ? err.error.erros.forEach((errors?: any) => {
          this.toastr.error(errors, 'Erro!')
        })
        : this.toastr.error(msg, 'Erro!');
  }

}
