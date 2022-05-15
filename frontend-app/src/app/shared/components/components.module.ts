
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieStarsComponent } from './movie-stars/movie-stars.component';
import { MovieScoreComponent } from './movie-score/movie-score.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { StarComponent } from './star/star.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    NavbarComponent,  
    FooterComponent,
    MovieStarsComponent,    
    MovieScoreComponent,
    MovieCardComponent,
    StarComponent,
    PaginationComponent,    
  ],
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule.forRoot()
  ],
  exports: [
    NavbarComponent,   
    FooterComponent,
    MovieStarsComponent,    
    MovieScoreComponent,
    MovieCardComponent, 
    PaginationComponent   
  ]
})
export class ComponentsModule { }
