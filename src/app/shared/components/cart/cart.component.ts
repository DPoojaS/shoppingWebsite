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
  productsArray : Iproduct[] = [
       {
      "id": 101,
      "name": "T-Shirt",
      "price": 499,
      "quantity": 2,
      "category": "Clothing"
    }
  ];
  count! : number;
  getId! : number;
  constructor(private prodService : ProductService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    // this.getSinglePorducts()

    console.log(this.productsArray)
   this.prodService.productSub.subscribe(res =>{
      console.log(res);
            // this.productsArray = res

            // this.productsArray.push(res)
            this.productsArray = [...this.productsArray, res]
            console.log(this.productsArray)
    })

  // this.route.params
  //           .subscribe(res =>{
  //             let id = +res['id'];
  //             this.prodService.getSingleProduct(id).subscribe(data => {
  //               this.productsArray.push(data)
  //             }
             
  //             )
  //             console.log(this.productsArray)
  //           })
 

  }

  // getSinglePorducts(){
  //   this.prodService.productSub.subscribe(res =>{
  //     console.log(res);
  //     // this.productsArray.push(res);
  //     this.productsArray = res
  //     console.log(this.productsArray);
  //   })
  // }
}
