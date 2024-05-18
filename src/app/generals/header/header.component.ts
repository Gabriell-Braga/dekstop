import { Component } from '@angular/core';
import { Routes, ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logo: string = 'assets/img/logo.png';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
