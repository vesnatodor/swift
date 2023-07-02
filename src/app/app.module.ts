import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { BooksComponent } from './components/books/books.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { TextBooksComponent } from './components/text-books/text-books.component';
import { TextbookRentalsComponent } from './components/textbook-rentals/textbook-rentals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BestSellersComponent,
    TextBooksComponent,
    TextbookRentalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
