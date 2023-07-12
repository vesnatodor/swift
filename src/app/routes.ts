import { Routes } from "@angular/router";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { TextBooksComponent } from "./components/text-books/text-books.component";
import { BasketComponent } from "./components/basket/basket.component";
import { BestSellersComponent } from "./components/best-sellers/best-sellers.component";
import { TextbookRentalsComponent } from "./components/textbook-rentals/textbook-rentals.component";
import { CreateAccountComponent } from "./components/create-account/create-account.component";
import { SingleComponent } from "./components/single/single.component";
import { ReadComponent } from "./components/read/read.component";


export const route:Routes= [
    {
              path: '',
              pathMatch:'full',
              redirectTo: '/text_books'
    },
       
    {    
              path:'text_books',
              component:TextBooksComponent
             
    }, 
     {    
        path:'product/:id',
        component:SingleComponent
        
     },
    
    {
             path:'best_sellers',
             component:BestSellersComponent
    },
    
    {
        path:'read',
        component:ReadComponent,
    },

   
    {
             path:'textbook_rentals',
             component:TextbookRentalsComponent 

     },
    
     {
              path: 'basket',
              component: BasketComponent,
                                        
                      
     },
     {
        path: 'create-account',
        component: CreateAccountComponent,
                                  
                
},

    
    
    {
              path: '**',
              component:SignInComponent
    }
    
]
