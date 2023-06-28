import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBooksComponent } from './text-books.component';

describe('TextBooksComponent', () => {
  let component: TextBooksComponent;
  let fixture: ComponentFixture<TextBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextBooksComponent]
    });
    fixture = TestBed.createComponent(TextBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
