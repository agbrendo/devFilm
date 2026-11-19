import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { IMovie, IMovieGenres } from './movies-service.model';
import { APIs } from '../../enviroment';
import { tap } from 'rxjs';

@Service()
export class MoviesService {
    private readonly httpClient = inject(HttpClient);
    // htttpClient nativo angular , faz conexao com back e front , para chamadas htttp

    public readonly movies = signal<IMovie[]>([]);

    public getMovies() {
        return this.httpClient
            .get<IMovie[]>(APIs.MOVIES)
            .pipe(tap((value) => this.movies.set(value)));
    }

    // new Set retorna array sem duplicaçao
    public getGenres(): string[] {
        const movies = this.movies();
        const genres = movies.map((movie) => movie.gender);
        const genresSet = new Set(genres);

        return Array.from(genresSet);
    }

    public getMoviesGenres() {
        const genres = this.getGenres();
        const initiaValue: IMovieGenres = {};
        const movies = this.movies();

        return genres.reduce((previous, current) => {
            const movieFiltered = movies.filter((movie) => movie.gender === current);

            return { ...previous, [current]: movieFiltered };
        }, initiaValue);
    }
}
