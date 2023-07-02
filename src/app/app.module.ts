import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

import { BooksComponent } from './components/books/books.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { TextBooksComponent } from './components/text-books/text-books.component';
import { TextbookRentalsComponent } from './components/textbook-rentals/textbook-rentals.component';
import { AwesomeShopComponent } from './components/awesome-shop/awesome-shop.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { BasketComponent } from './components/basket/basket.component';
import { RouterModule } from '@angular/router';
import { route } from './routes';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BestSellersComponent,
    TextBooksComponent,
    TextbookRentalsComponent,
    AwesomeShopComponent,
    SignInComponent,
    BasketComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
