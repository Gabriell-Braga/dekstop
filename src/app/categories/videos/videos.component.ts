import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import videosData from '../../../assets/json/videos.json';
import { ShortenNumberPipe } from '../../shorten-number.pipe';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [RouterLink, ShortenNumberPipe],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  //videos
  videos: any = videosData;
}
