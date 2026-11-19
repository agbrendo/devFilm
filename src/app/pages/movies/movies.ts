import { Component, computed, effect, inject, signal } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { CardsMovies } from '../../components/cards-movies/cards-movies';
import { IMovieGenres } from '../../services/movies-service/movies-service.model';
import { MoviesService } from '../../services/movies-service/movies-service';
import { FilterMovies } from '../../components/filter-movies/filter-movies';

@Component({
  imports: [Banner, CardsMovies, FilterMovies],
  selector: 'app-movies',
  styleUrl: './movies.scss',
  templateUrl: './movies.html',
})
export class Movies {
  private readonly moviesService = inject(MoviesService);

  protected readonly moviesGenres = signal<IMovieGenres>({});
  protected readonly genres = computed<string[]>(() => Object.keys(this.moviesGenres()));
  protected readonly currentGenre = signal<string | undefined>(undefined);

  public constructor() {
    effect(() => {
      const moviesGenres = this.moviesService.getMoviesGenres();

      this.moviesGenres.set(moviesGenres);
      console.log(moviesGenres);
    });
  }

  protected changeGenre(genre: string | undefined) {
    this.currentGenre.set(genre);
  }
}
