import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Product } from "../interfaces/product";
import { DataService } from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // id = new BehaviorSubject<any>([])

  qty = new Subject<number>()

  productsInCart:Product[] = []


  getProds(product:Product,qty:any){
    let prod = {...product , qty:qty}
    this.productsInCart.push(prod)
    this.qty.next(this.productsInCart.length)
  }

  removeProd(id:any){
    this.productsInCart.splice(id,1)
    return this.productsInCart
  }

}
