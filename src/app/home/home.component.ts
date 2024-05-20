import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SafePipe } from '../safe.pipe';
import { ShortenNumberPipe } from '../shorten-number.pipe';
import { CurrencyPipe } from '@angular/common';

//json data
import gamesData from '../../assets/json/games.json';
import musicsData from '../../assets/json/musics.json';
import videosData from '../../assets/json/videos.json';
import artworksData from '../../assets/json/artworks.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SafePipe, ShortenNumberPipe, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  ngOnInit(){
    
  }

  // games
  games: any = gamesData;
  bannerGame: any = gamesData[Math.floor(Math.random() * gamesData.length)];

  //musics
  musics: any = musicsData;
  bannerMusic: any = musicsData[Math.floor(Math.random() * musicsData.length)];

  //videos
  videos: any = videosData;

  //artworks
  artworks: any = artworksData;
  bannerArtwork: any = artworksData[Math.floor(Math.random() * artworksData.length)];

  constructor() {}
  
}
