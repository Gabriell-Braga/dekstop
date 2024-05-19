import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import musicsData from '../../../assets/json/musics.json';

@Component({
  selector: 'app-musics',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './musics.component.html',
  styleUrl: './musics.component.css'
})
export class MusicsComponent {

  //musics
  musics: any = musicsData;
  bannerMusic: any = musicsData[Math.floor(Math.random() * musicsData.length)];

}
