import { Injectable } from '@angular/core';
import { IProduct } from '../models/products.interface';
import { Subject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  productsList: IProduct[] = [];
  productsListSubject: Subject<IProduct[]> = new Subject();



  constructor( private storageService: StorageService) { }
}
