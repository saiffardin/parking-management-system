import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  changeRoute(path: string) {
    console.log('changeRoute:', path);
    this._router.navigateByUrl(path);
  }
}
