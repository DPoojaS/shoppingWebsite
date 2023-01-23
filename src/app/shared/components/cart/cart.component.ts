import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productsArray : Iproduct[] = [];
  count! : number;
  getId! : number;
  constructor(private prodService : ProductService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
   this.getProductsData();

  }

  getProductsData(){
    this.productsArray = this.prodService.ViewCartArray

    if(!this.productsArray.length){
      this.productsArray = JSON.parse(localStorage.getItem('setProduct')!);
    }
    
  }
  onDelete(id : number){

  this.productsArray =   this.productsArray.filter(ele => ele.id !== id);
  this.prodService.ViewCartArray = this.productsArray;
  localStorage.setItem('setProduct', JSON.stringify(this.prodService.ViewCartArray))
  }

}
