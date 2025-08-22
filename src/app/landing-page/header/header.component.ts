import { ChangeDetectionStrategy, Component, ComponentRef, HostListener, inject, inputBinding, OnInit, outputBinding, signal, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { metaData } from '../../commons/constants/app.constants';
import { filter } from 'rxjs';
import { ModalComponent } from '../../commons/components/modal/modal.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, ModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  #router = inject(Router);
  #vcr = inject(ViewContainerRef);
  appConstants = metaData;
  isOpen = signal(false);
  // #componentRef: ComponentRef<ModalComponent>;
  isShrunk = signal(false);
  #isMobile = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      this.isShrunk.set(window.scrollY > 30); // more sensitive for mobile
    } else {
      this.isShrunk.set(window.scrollY > 50);
    }
  }

  ngOnInit(): void {
    this.#isMobile = window.innerWidth <= 768;

    // this.#router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((navEvent) => {
    //     console.log(navEvent);
    //   })
  }

  navigateToQuote(path: string) {
    this.#router.navigate([path]);
    this.isOpen.set(false);
  }

  navigateTo() {
    this.isOpen.set(true);
    // this.#componentRef = this.#vcr.createComponent(ModalComponent, {
    //   bindings: [
    //     inputBinding('isOpen', signal(true)),
    //     outputBinding('close', () => this.onModalClose())
    //   ]
    // });
  }

  // onModalClose() {
  //   console.log('Destroy...');
  //   this.#componentRef.destroy()
  // }

  close(event) {
    this.isOpen.set(false);
  }

  onMenuOpen() {
    this.isOpen.set(true);
  }

}
