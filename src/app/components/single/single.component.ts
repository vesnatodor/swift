import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/products.interface';
import { BasketService } from 'src/app/services/basket.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {

  product: IProduct | undefined = {
    id:0,
    image:'',
    title:'',
    price:0,
    basket:'',
   quantity: 0
  };
  
    constructor (private _productsService: ProductsService,
      private _route: ActivatedRoute,
      private basketService: BasketService) {}

ngOnInit():void{
this._productsService.getProducts().subscribe((data: IProduct[])=> { 
 this.product = data.find((el)=> el.id === +this._route.snapshot.params['id']);

});

}

addToCart() {
  this.basketService.addProduct(this.product!);
}

}
