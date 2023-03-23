import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PATH_DASHBOARD, PATH_HOME } from 'src/utils/path';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  pathHome :string = PATH_HOME;
  pathDashboard :string = PATH_DASHBOARD;

  changeRoute(path: string) {
    console.log('changeRoute:', path);
    this._router.navigateByUrl(path);
  }
}
