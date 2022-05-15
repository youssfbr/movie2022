import { fromEvent, merge, Observable } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { DisplayMessage, GenericValidator, ValidationMessages } from '@app/shared/utils/generic-form-validation';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { Movie } from '@app/shared/models/movie';
import { Score } from '@app/shared/models/score';

import { MovieService } from '@app/shared/services/movie.service';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html'
})
export class MovieFormComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements?: ElementRef[];  

  movie = {} as Movie;
  getMovieId: number = 0; 
  score = {} as Score;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private service: MovieService,
    private toastr: ToastrService,
  ) {
    this.genericValidator = new GenericValidator(this.validationMessages);
   }

   ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements!
     .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.form);
    });
  }

  ngOnInit(): void {
    this.getMovie();
  }

  private genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};
  validationMessages: ValidationMessages =
  {
    email: {
      required: 'O e-mail é requerido.',
      email: 'O e-mail está inválido.',
    },
    score: {
      required: 'Selecione uma nota.'     
    }
  };

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    score: ['', [Validators.required]]
  });

  public cssValidator(fieldForm: FormControl | AbstractControl | null): any {
    return {'is-invalid': fieldForm?.errors && (fieldForm?.dirty || fieldForm?.touched)};
  }

  private getMovie(): void {    

    this.getMovieId = +this.activatedRoute.snapshot.paramMap.get('id')!;
  
    if (this.getMovieId && this.getMovieId !== null && this.getMovieId > 0) {

      this.spinner.show();      

      this.service.getMovieById(this.getMovieId).subscribe(

        (movieResponse: Movie) => {
          this.movie = movieResponse;       
        },
        (err: any) => {
          this.error(err, 'Ocorreu um erro ao carregar os dados!')
        }          
      ).add(() => this.spinner.hide());
    }
  }

  private error(err?: any, msg?: string): void {

    this.movie = {
      id: 0,
      image: "@app/../assets/img/naoencontrado.webp",
      title: "Filme não encontrado.",
      count: 0,
      score: 0
  };   

    this.toastr.clear();
    this.toastr.toastrConfig.disableTimeOut = true;

    (err.error.erros)
        ? err.error.erros.forEach((errors?: any) => {
          this.toastr.error(errors, 'Erro!')
        })
        : this.toastr.error(msg, 'Erro!');
  }

  onSubmit(form: FormGroup): void {
    
    if (form.dirty && form.valid) {

      this.spinner.show();

      this.score = Object.assign({}, this.score, this.form.value)
      this.score.movieId = this.getMovieId;

      
      this.service.updateScore(this.score).subscribe(
        (scoreResponse: Score) => {

          this.toastr.clear();
          this.toastr.toastrConfig.disableTimeOut = false;
          this.toastr.success('Nota atualizada.');

          this.router.navigate(['/movie-list']);
        },
        (err: any) => this.error(err, 'Ocorreu um erro ao salvar/atualizar!')
      ).add(() => this.spinner.hide());
    }
  }  

}
