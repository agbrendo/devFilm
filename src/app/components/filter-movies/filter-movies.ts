import { Component, effect, inject, input, output } from '@angular/core';
import { MoviesService } from '../../services/movies-service/movies-service';

@Component({
  imports: [],
  selector: 'app-filter-movies',
  styleUrl: './filter-movies.scss',
  templateUrl: './filter-movies.html',
})
export class FilterMovies {
  public readonly currentGenre = input<string>();
  public readonly genres = input.required<string[]>();
  public readonly changeGenre = output<string | undefined>();

  public onChangeGenre(genre: string | undefined) {
    this.changeGenre.emit(genre);
  }
}
