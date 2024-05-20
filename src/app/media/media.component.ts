import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

//json data
import gamesData from '../../assets/json/games.json';
import musicsData from '../../assets/json/musics.json';
import videosData from '../../assets/json/videos.json';
import artworksData from '../../assets/json/artworks.json';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../safe.pipe';
import { ShortenNumberPipe } from '../shorten-number.pipe';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [RouterLink, CommonModule, SafePipe, ShortenNumberPipe],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  // games
  games: any = gamesData;

  //musics
  musics: any = musicsData;

  //videos
  videos: any = videosData;

  //artworks
  artworks: any = artworksData;

  type: any;
  id: any;
  rate: any;
  like: any;


  data:any = {};
  awards:any = {};

  constructor(route: ActivatedRoute) {
    this.type = route.snapshot.paramMap.get('type');
    this.id = route.snapshot.paramMap.get('id');
    this.rate = route.snapshot.paramMap.get('rate');

    if(this.rate && this.rate != 0 && this.type == 'game'){
      const fs = require('fs');
      var gamesFile = 'src/assets/json/games.json';
      var games = JSON.parse(fs.readFileSync(gamesFile).toString());
      games.forEach((game: any) =>{
          if(game.id == this.id){
              game.rate = this.rate;
          }
      });
      fs.writeFileSync(gamesFile, JSON.stringify(games));
    }

    if(this.rate && this.rate != 0 && this.type == 'music'){
      const fs = require('fs');
      var musicsFile = 'src/assets/json/musics.json';
      var musics = JSON.parse(fs.readFileSync(musicsFile).toString());
      musics.forEach((music: any) =>{
          if(music.id == this.id){
            music.rate = this.rate;
          }
      });
      fs.writeFileSync(musicsFile, JSON.stringify(musics));
    }

    if(this.rate && this.rate != 0 && this.type == 'video'){
      const fs = require('fs');
      var videosFile = 'src/assets/json/videos.json';
      var videos = JSON.parse(fs.readFileSync(videosFile).toString());
      videos.forEach((video: any) =>{
          if(video.id == this.id){
            video.like = this.rate;
          }
      });
      fs.writeFileSync(videosFile, JSON.stringify(videos));
    }

    switch (this.type) {
      case 'game':
        this.games.forEach((element: any) => {
          if(element.id == this.id){
            this.data = element;
            this.awards = element.awards;
            this.rate = element.rate;
          }
        });
        break;
      case 'music':
        this.musics.forEach((element: any) => {
          if(element.id == this.id){
            this.data = element;
            this.rate = element.rate;
          } 
        });
        break;
      case 'video':
        this.videos.forEach((element: any) => {
          if(element.id == this.id){
            this.data = element;
            this.like = element.like;
            console.log(element.like)
          }
        });
        break;
      case 'artwork':
        this.artworks.forEach((element: any) => {
          if(element.id == this.id) this.data = element;
        });
        break;
      default:
        // Code for handling unknown media type
        break;
    }
  }

  ngOnInit(){
    
  }
}
