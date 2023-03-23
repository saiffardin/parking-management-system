import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

export interface IVehicle {
  licenseNum: string;
  vehicleType: string;
  ownerName: string;
  entryTime: string;
  exitTime: string;
  status: string;
}


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

  // addNewRow() {
  //   console.log('addNewRow');
  // }
}
