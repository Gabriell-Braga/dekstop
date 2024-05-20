import { Component } from '@angular/core';

//json data
import gamesData from '../../assets/json/games.json';
import musicsData from '../../assets/json/musics.json';
import videosData from '../../assets/json/videos.json';
import artworksData from '../../assets/json/artworks.json';
import { RouterLink } from '@angular/router';
import { ShortenNumberPipe } from '../shorten-number.pipe';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, ShortenNumberPipe, CurrencyPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  // games
  games: any = gamesData;

  //musics
  musics: any = musicsData;

  //videos
  videos: any = videosData;

  //artworks
  artworks: any = artworksData;

  //search
  search: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const search = params['search'];
      this.search = search;

      // Filter games based on search
      this.games = this.games.filter((game: any) => game.name.toLowerCase().includes(this.search.toLowerCase()));

      // Filter musics based on search
      this.musics = this.musics.filter((music: any) => music.name.toLowerCase().includes(this.search.toLowerCase()));

      // Filter videos based on search
      this.videos = this.videos.filter((video: any) => video.name.toLowerCase().includes(this.search.toLowerCase()));

      // Filter artworks based on search
      this.artworks = this.artworks.filter((artwork: any) => artwork.name.toLowerCase().includes(this.search.toLowerCase()));
    });
  }

}
