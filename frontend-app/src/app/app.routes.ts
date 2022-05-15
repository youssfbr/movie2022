import { Routes } from "@angular/router";

import { MovieListComponent } from './pages/movie/movie-list/movie-list.component';


export const routes: Routes = [

    { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
    {
        path: '',
        loadChildren: () => import('./pages/movie/movie-routing.module').then(m => m.MovieRoutingModule)
    },
    { path: '**', component: MovieListComponent },
    
];