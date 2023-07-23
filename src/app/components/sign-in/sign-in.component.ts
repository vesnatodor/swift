import { Component } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isLoggIn = false; 
  email='';
  basketService: any;


  constructor(private storageService: StorageService, basketService: BasketService){

  }
  

  ngOnInit(): void {
    this.storageService.getUserLoggedIn().subscribe(user => {
      if (user.name === '') {
        this.isLoggIn = false;
      } else {
        this.isLoggIn = true;
      }
    });

    


  }
 
 
  login(): void{
    this.storageService.login(this.email)
  }
  logout(){
    this.storageService.logout();
    this.basketService.clearProductsList();
  }
  
  

}