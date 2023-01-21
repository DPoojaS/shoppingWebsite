import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl : string = `${environment.baseUrl}`;
  arrayProduct: any[] = []
  productSub : Subject<Iproduct> = new Subject();
  countSub : Subject<number> = new Subject();
  constructor(private http : HttpClient) { }

  fetchAllProucts():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(this.productsUrl)
  }

  getSingleProduct(id : number):Observable<Iproduct>{
    let singleProductUrl = `${this.productsUrl}/${id}`
    return this.http.get<Iproduct>(singleProductUrl)
  }
  postProduct(form : Iproduct):Observable<Iproduct>{
    return this.http.post<Iproduct>(this.productsUrl, form)
  }
  updateProduct(id : number, obj : Iproduct):Observable<Iproduct>{
    let updateUrl = `${this.productsUrl}/${id}`
    return this.http.patch<Iproduct>(updateUrl, obj)
  }
  deleteProduct(id : number):Observable<Iproduct>{
    let deleteUrl = `${this.productsUrl}/${id}`;
    return this.http.delete<Iproduct>(deleteUrl)
  }

  getsingleProductObject(id : number){
    this.fetchAllProucts().subscribe(res =>{
      this.arrayProduct = res
    })
    let newarr = this.arrayProduct.filter(ele => ele.id === id);
    return newarr
  }
}
