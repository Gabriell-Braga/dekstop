import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, ActivatedRoute, RouterLink, RouterLinkActive, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logo: string = 'assets/img/logo.png';
  search: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('cs');
    this.router.navigate(['/search', this.search]);
    console.log('search', this.search);
  }

}
