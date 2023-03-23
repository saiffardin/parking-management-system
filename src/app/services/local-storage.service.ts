import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  KEY = 'selise';

  constructor() {}

  addItemToLocalStorage(item: any) {
    let resultArr = this.getItemFromLocalStorage();
    resultArr = [...resultArr, item];

    localStorage.setItem(this.KEY, JSON.stringify(resultArr));
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
