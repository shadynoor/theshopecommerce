import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject  , BehaviorSubject} from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  category = new BehaviorSubject<string>('')

  getAllData(){
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products')
  }

  getOneProduct(id:any){
    return this.httpClient.get<Product>('https://fakestoreapi.com/products/'+id)
  }

  getAllCategories(){
    return this.httpClient.get('https://fakestoreapi.com/products/categories')
  }

  getByCategory(cat:string){
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products/category/'+cat)
  }

  constructor(private httpClient:HttpClient) { }
}
