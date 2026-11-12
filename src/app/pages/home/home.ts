import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../components/footer/footer';

@Component({
  imports: [NavBar, RouterOutlet, Footer],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
