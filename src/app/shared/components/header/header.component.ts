import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showSideNav!: boolean;
  @Input() isLoggedIn!: boolean;
  @Output() toggledSideNav: EventEmitter<boolean> = new EventEmitter();

  @Input() logo?: string;
  @Input() menu?: string;
  scrolled: boolean = false;

  ngOnInit(): void {
    this.onScroll();
  }

  toggleSideNav() {
    this.toggledSideNav.emit();
    this.showSideNav = !this.showSideNav;
  }

  @HostListener('window:scroll', [])
  onScroll() {
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
