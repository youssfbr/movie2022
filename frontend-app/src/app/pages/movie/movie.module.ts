import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from './../../shared/components/components.module';
import { MovieRoutingModule } from './movie-routing.module';

import { NgxSpinnerModule } from "ngx-spinner";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MovieRoutingModule,
    ComponentsModule,

    NgxSpinnerModule,
    TooltipModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
    }),
  ],
  exports: [
    MovieListComponent,
    MovieFormComponent
  ]
})
export class MovieModule { }
