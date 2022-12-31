import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() logo: string = '/assets/logo/logo2.svg';

  closeMenu() {
    throw new Error('Method not implemented.');
  }

  openMenu(): void {
    document.body.classList.add('menu-expanded');
  }


}
