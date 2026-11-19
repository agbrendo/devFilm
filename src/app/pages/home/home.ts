import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { MoviesService } from '../../services/movies-service/movies-service';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { IMovieGenres } from '../../services/movies-service/movies-service.model';

@Component({
  imports: [NavBar, RouterOutlet, Footer],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private readonly moviesService = inject(MoviesService);
  private readonly destroyRef = inject(DestroyRef);

  public ngOnInit(): void {
    this.moviesService.getMovies().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
}
