import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isShrunk = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      this.isShrunk = window.scrollY > 30; // more sensitive for mobile
    } else {
      this.isShrunk = window.scrollY > 50;
    }
  }

  isMobile = false;

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 768;
  }

}
