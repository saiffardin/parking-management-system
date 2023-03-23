import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  KEY = 'selise';
  recordsSubject = new Subject<any>();

  constructor() {}

  addItemToLocalStorage(item: any) {
    let resultArr = this.getItemFromLocalStorage();
    resultArr = [...resultArr, item];

    localStorage.setItem(this.KEY, JSON.stringify(resultArr));
    this.recordsSubject.next(resultArr);
  }

  getItemFromLocalStorage() {
    const response = localStorage.getItem(this.KEY);

    if (response) {
      return JSON.parse(response);
    } else {
      return [];
    }
  }
}
