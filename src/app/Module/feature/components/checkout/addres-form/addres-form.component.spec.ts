import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresFormComponent } from './addres-form.component';

describe('AddresFormComponent', () => {
  let component: AddresFormComponent;
  let fixture: ComponentFixture<AddresFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddresFormComponent]
    });
    fixture = TestBed.createComponent(AddresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
