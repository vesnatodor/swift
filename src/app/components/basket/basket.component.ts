import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/products.interface';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  orderAmount: number=0;
  productsList: IProduct[] = [];
  add_amount: any;
  

  constructor(private basketService: BasketService){

  }
  ngOnInit(): void {
    this.productsList = this.basketService.getProductsList();
    this.calculateTotalAmount();
  }
  

  calculateTotalAmount() {
    this.orderAmount = 0;

    this.productsList.forEach(p => this.orderAmount += p.quantity * p.price);
  }
  
  deleteProductFromCart(productId: number) {
    this.basketService.removeProduct(productId);
    this.productsList = this.basketService.getProductsList();
    this.calculateTotalAmount();
  }


}
