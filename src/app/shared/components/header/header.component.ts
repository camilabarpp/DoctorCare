import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
closeMenu() {
throw new Error('Method not implemented.');
}
  @Input() logo: string = '/assets/logo/logo2.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
