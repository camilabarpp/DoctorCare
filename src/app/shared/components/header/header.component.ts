import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  HostListener,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showSideNav!: boolean;
  scrolled: boolean = false;
  @Output() toggledSideNav: EventEmitter<boolean> = new EventEmitter();
  @Input() logo?: string;
  @Input() menu?: string;

  ngOnInit(): void {
    this.onScroll();
  }

  toggleSideNav(): void {
    this.toggledSideNav.emit();
    this.showSideNav = !this.showSideNav;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.pageYOffset > 0) {
      this.scrolled = true;
      this.logo = 'assets/logo.svg';
      this.menu = 'assets/menu2.svg';
    } else {
      this.logo = 'assets/logo2.svg';
      this.menu = 'assets/menu.svg';
      this.scrolled = false;
    }
  }
}
