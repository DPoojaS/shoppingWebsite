import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  productsArray : Iproduct[] = [];
  newproductArr : Iproduct | undefined
  getRoleOfUser!: string | null;
  canEdit : number = 0;
  count : number = 1;
  error : string = '';
  constructor(private prodService : ProductService) { }

  ngOnInit(): void {
    this.getAllproducts();
    this.getRoleOfUser = localStorage.getItem('userRole')
  }

  getAllproducts(){
    this.prodService.fetchAllProucts().subscribe((res) =>{
      console.log(res);
      // this.productsArray.push(res)
      // console.log(res.status);
      // if(typeof res === 'string'){
      //   this.error = res
        
      // }else{
      //   this.productsArray = res 
      // }
  
      // if(!this.productsArray.length){
      //   this.error = res
        
      // }else{
      //   this.productsArray = res 
      // }
  
     this.productsArray = res  
      console.log(this.productsArray.length);
    //   this.error = error
    })
  }

  onaddCard(id: number){
    // console.log( this.productsArray);
    this.newproductArr =   this.productsArray.find(ele => ele.id == id);
    // console.log(this.newproductArr);
    // this.prodService.productSub.next(this.newproductArr!);
    // this.prodService.countSub.next( this.count++)

    this.prodService.ViewCartArray.push(this.newproductArr!)
    localStorage.setItem('setProduct', JSON.stringify(this.prodService.ViewCartArray))
  }
  onEditCard(id: number){
    console.log(id);

  }
  onDeleteCart(id: number){
    console.log(id);
    this.prodService.deleteProduct(id).subscribe(res =>{
      this.productsArray = this.productsArray.filter(ele => ele.id !== id)
    })
  }
}
