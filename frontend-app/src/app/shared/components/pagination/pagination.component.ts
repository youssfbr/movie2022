
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoviePage } from '@app/shared/models/movie-page';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['pagination.component.css']
})
export class PaginationComponent {

  @Input()
  page = {} as MoviePage;  

  @Output()
  status: EventEmitter<any> = new EventEmitter();

  changePage(value: number): void {    
    this.status.emit((this.page.number + value) as number);
  } 

}
