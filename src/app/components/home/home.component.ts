import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

// export interface PeriodicElement {
export interface IVehicle {
  licenseNum: string;
  vehicleType: string;
  ownerName: string;
  entryTime: string;
  exitTime: string;
  status: string;
}

const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'licenseNum',
    'vehicleType',
    'ownerName',
    'entryTime',
    'exitTime',
    'status',
    // 'action',
  ];
  // dataSource = ELEMENT_DATA;
  dataSource = [];

  constructor(private _localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    let resultArr = this._localStorageService.getItemFromLocalStorage();
    console.log('resultArr:', resultArr);
    this.dataSource = resultArr;

    this._localStorageService.recordsSubject.subscribe((value: any) => {
      this.dataSource = value;
    });
  }
}
