import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { BasketService } from 'src/app/services/basket.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name="";
  numbera = 0;
  isLoggIn=false;

  constructor(private storageService: StorageService,
    private basketService : BasketService
    
    ){
  }

  ngOnInit(): void {


    this.storageService.getUserLoggedIn().subscribe(user=> {
      if(user.name === '') {

        this.isLoggIn = false;
      } else{

        this.isLoggIn =true;
      }
    }
    );

    this.numbera = this.basketService.getProductsList().length;
    this.basketService.getProductsInCartSubject().subscribe( (products): number=>
      this.numbera=products.length
    )
  };
}

      

      
   


