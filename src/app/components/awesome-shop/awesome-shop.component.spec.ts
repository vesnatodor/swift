import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeShopComponent } from './awesome-shop.component';

describe('AwesomeShopComponent', () => {
  let component: AwesomeShopComponent;
  let fixture: ComponentFixture<AwesomeShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwesomeShopComponent]
    });
    fixture = TestBed.createComponent(AwesomeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
