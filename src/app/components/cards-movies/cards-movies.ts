import { Component, input } from '@angular/core';
import { IMovie } from '../../services/movies-service/movies-service.model';

@Component({
  imports: [],
  selector: 'app-cards-movies',
  styleUrl: './cards-movies.scss',
  templateUrl: './cards-movies.html',
})
export class CardsMovies {
  public readonly movies = input.required<IMovie[]>();
  public readonly genre = input.required<string>();

  
}
