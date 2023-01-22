import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count! : number;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.countSub.subscribe(res =>{
      console.log(res);
      this.count = res
    })
  }

  onserch(event : Event){
    console.log((event.target as HTMLInputElement).value);    
  }
}
