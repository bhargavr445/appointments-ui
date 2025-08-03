import { Component, ComponentRef, HostListener, inject, inputBinding, OnInit, outputBinding, signal, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { metaData } from '../../commons/constants/app.constants';
import { filter } from 'rxjs';
import { ModalComponent } from '../../commons/components/modal/modal.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  #router = inject(Router);
  #vcr = inject(ViewContainerRef);
  appConstants = metaData;
  isOpen = signal(false);
  #componentRef: ComponentRef<ModalComponent>;
  isShrunk = false;
  isMobile = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      this.isShrunk = window.scrollY > 30; // more sensitive for mobile
    } else {
      this.isShrunk = window.scrollY > 50;
    }
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 768;

    this.#router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((navEvent) => {
        console.log(navEvent);
      })
  }

  navigateTo() {
    this.#componentRef = this.#vcr.createComponent(ModalComponent, {
      bindings: [
        inputBinding('isOpen', signal(true)),
        outputBinding('close', () => this.onModalClose())
      ]
    });
  }

  onModalClose() {
    console.log('Destroy...');
    this.#componentRef.destroy()
  }

  onMenuOpen() {
    this.isOpen.set(true);
  }

}
