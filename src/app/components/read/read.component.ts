import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  products: IProduct[]=[];
  constructor(private _productsService: ProductsService){}
  ngOnInit(): void{
    this._productsService.getProducts().subscribe((data: IProduct[])=>{
    this.products = data;

  })
    
    
  ;
}

}

  
    
