import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public showSideNav!: boolean;

  toggleSideNav(): void {
    this.showSideNav = !this.showSideNav;
    if (this.showSideNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
