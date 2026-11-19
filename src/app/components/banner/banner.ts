import { Component, computed, inject } from '@angular/core';
import { MoviesService } from '../../services/movies-service/movies-service';
import { JsonPipe } from '@angular/common';
import { MatchSource } from '@angular/compiler';

@Component({
  imports: [JsonPipe],
  selector: 'app-banner',
  styleUrl: './banner.scss',
  templateUrl: './banner.html',
})
export class Banner {
  private readonly moviesService = inject(MoviesService);

  // computed monitora os signal, e acompanha as alteraçoes

  protected readonly movies = computed(() => this.moviesService.movies());
  protected readonly movieRandom = computed(() => {
    const amount = this.movies().length;
    const random = Math.floor(Math.random() * amount) + 1;

    return this.movies()[random];
  });
}
