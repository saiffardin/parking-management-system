import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormInfoComponent } from './modal-form-info.component';

describe('ModalFormInfoComponent', () => {
  let component: ModalFormInfoComponent;
  let fixture: ComponentFixture<ModalFormInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
