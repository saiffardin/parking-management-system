import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'modal-form-info',
  templateUrl: './modal-form-info.component.html',
  styleUrls: ['./modal-form-info.component.css'],
})
export class ModalFormInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  contactForm = new FormGroup({
    licenseNum: new FormControl(),
    vehicleType: new FormControl(),
    ownerName: new FormControl(),
    entryTime: new FormControl(),
    exitTime: new FormControl(),
    status: new FormControl(),
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
