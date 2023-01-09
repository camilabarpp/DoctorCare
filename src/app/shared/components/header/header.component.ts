import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showSideNav!: boolean;
  @Input() isLoggedIn!: boolean;
  @Output() toggledSideNav: EventEmitter<boolean> = new EventEmitter();
  background: any;

  ngOnInit(): void {}

  toggleSideNav() {
    this.toggledSideNav.emit();
    this.showSideNav = !this.showSideNav;
  }


}
