import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import artworksData from '../../../assets/json/artworks.json';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-artworks',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './artworks.component.html',
  styleUrl: './artworks.component.css'
})
export class ArtworksComponent {
  //artworks
  artworks: any = artworksData;
  bannerArtwork: any = artworksData[Math.floor(Math.random() * artworksData.length)];
}
