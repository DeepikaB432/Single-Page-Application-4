import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products:any = [];

  constructor(private productService:ProductsService){
    this.products= this.productService.getProducts()
    console.log(this.products)
  }

}
