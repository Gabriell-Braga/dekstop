import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gamesData from '../../assets/json/games.json';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  games: any = gamesData;
  bannerGame: any = gamesData[Math.floor(Math.random() * gamesData.length)];

  constructor() {}

  @ViewChild('slider', { static: false }) slider!: ElementRef;
  isDown = false;
  startX = 0;
  scrollLeft = 0;

  ngAfterViewInit() {
    const slider = this.slider.nativeElement;

    slider.addEventListener('mousedown', (e: MouseEvent) => this.onMouseDown(e));
    slider.addEventListener('mouseleave', () => this.onMouseLeave());
    slider.addEventListener('mouseup', () => this.onMouseUp());
    slider.addEventListener('mousemove', (e: MouseEvent) => this.onMouseMove(e));
    slider.addEventListener('touchstart', (e: TouchEvent) => this.onTouchStart(e));
    slider.addEventListener('touchend', () => this.onTouchEnd());
    slider.addEventListener('touchmove', (e: TouchEvent) => this.onTouchMove(e));
  }

  onMouseDown(e: MouseEvent) {
    this.isDown = true;
    this.startX = e.pageX - this.slider.nativeElement.offsetLeft;
    this.scrollLeft = this.slider.nativeElement.scrollLeft;
  }

  onMouseLeave() {
    this.isDown = false;
  }

  onMouseUp() {
    this.isDown = false;
  }

  onMouseMove(e: MouseEvent) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.slider.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3;
    this.slider.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  onTouchStart(e: TouchEvent) {
    this.isDown = true;
    this.startX = e.touches[0].pageX - this.slider.nativeElement.offsetLeft;
    this.scrollLeft = this.slider.nativeElement.scrollLeft;
  }

  onTouchEnd() {
    this.isDown = false;
  }

  onTouchMove(e: TouchEvent) {
    if (!this.isDown) return;
    const x = e.touches[0].pageX - this.slider.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3;
    this.slider.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  ngOnInit(){

  }
}
