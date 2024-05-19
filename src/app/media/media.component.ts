import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

//json data
import gamesData from '../../assets/json/games.json';
import musicsData from '../../assets/json/musics.json';
import videosData from '../../assets/json/videos.json';
import artworksData from '../../assets/json/artworks.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [RouterLink, CommonModule],
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

  data:any = {};
  awards:any = {};

  rate: number = 0;

  test: string = 'Hello World!';
  count: number = 0;

  constructor(route: ActivatedRoute) {
    this.type = route.snapshot.paramMap.get('type');
    this.id = route.snapshot.paramMap.get('id');

    switch (this.type) {
      case 'game':
        this.games.forEach((element: any) => {
          if(element.id == this.id){
            this.data = element;
            this.awards = element.awards;
          }
        });
        break;
      case 'music':
        this.musics.forEach((element: any) => {
          if(element.id == this.id) this.data = element;
        });
        break;
      case 'video':
        this.videos.forEach((element: any) => {
          if(element.id == this.id) this.data = element;
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

  fun(): void {
    this.test = 'You are my hero!';
    this.count++;
    alert('Test message :'+this.test+' Count :'+this.count);
  }

  saveRate(rating: number){
    this.rate = 0;
    this.rate = rating;
    console.log(this.rate);
  }
}
