import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productsForm! : FormGroup;
  productsArr : Iproduct[] = [];
  canEdit : boolean = true
  constructor(private productService : ProductService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.onCreateForm();
    
    this.route.params
    .subscribe((params : Params) =>{
      
      let getId = params['id'];    
      localStorage.setItem('setId', '' + getId)
      console.log(getId);
      this.productService.getSingleProduct(getId).subscribe(res =>{
        this.productsForm.setValue({
          name : res.name ,
          category : res.category,
          price : res.price,
          quantity : res.quantity
        })
      })
    })

  
  }

  onCreateForm(){
    this.productsForm = new FormGroup({
      name : new FormControl(null, Validators.required),
      category : new FormControl(null, Validators.required),
      price : new FormControl(null, Validators.required),
      quantity : new FormControl(null, Validators.required)
    })
  }
  onaddProductToForm(){
    console.log(this.productsForm.value);
    console.log('event triggered');
   
    this.productService.postProduct(this.productsForm.value).subscribe(res =>{
      console.log(res);
      this.productsArr.push(res);
      console.log(this.productsArr);
    })
    
    this.router.navigate(['/'])
  }
  // getEditProduct(){
  //   this.route.params
  //         .subscribe((params : Params) =>{
  //           let getId = +params['id'];
  //           console.log(getId);
  //           this.productService.getSingleProduct(getId).subscribe(res =>{
  //             this.productsForm.setValue({
  //               name : res.name ,
  //               category : res.category,
  //               price : res.price,
  //               quantity : res.quantity
  //             })
  //           })
  //         })
  // }

  onUpdateProduct(){
    let id = +(localStorage.getItem('setId')!);

    this.productService.updateProduct(id, this.productsForm.value).subscribe(res =>{
      console.log(res);
      this.productsArr.push(res);
      this.productsForm.reset()
    })
  }
}
