import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/products.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: IProduct = {
    id:0,
    image:'',
    title:'',
    price:0,
    basket:'',
   quantity: 0
  };
  
    @Input() id:number=0;
    @Input() image:string='';
    @Input() title: string='';
    @Input () price: number=0;
    @Input() basket: string='';

}
