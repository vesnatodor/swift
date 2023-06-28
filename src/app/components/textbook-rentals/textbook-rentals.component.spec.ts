import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbookRentalsComponent } from './textbook-rentals.component';

describe('TextbookRentalsComponent', () => {
  let component: TextbookRentalsComponent;
  let fixture: ComponentFixture<TextbookRentalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextbookRentalsComponent]
    });
    fixture = TestBed.createComponent(TextbookRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
