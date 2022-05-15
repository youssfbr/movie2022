import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';


const routes: Routes = [    
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-form/:id', component: MovieFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }