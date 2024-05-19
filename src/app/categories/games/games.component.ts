import { Component, HostListener, Inject } from '@angular/core';
import  gamesData  from '../../../assets/json/games.json';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  isMobile: boolean = false;

  // games
  games: any = gamesData;
  bannerGame: any = gamesData[Math.floor(Math.random() * gamesData.length)];
}
