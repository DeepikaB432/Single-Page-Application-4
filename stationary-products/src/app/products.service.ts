import { Injectable } from '@angular/core';
import { Products,products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(){
    return products;
  }
}
