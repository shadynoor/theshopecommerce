import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shop-start',
  templateUrl: './shop-start.component.html',
  styleUrls: ['./shop-start.component.scss']
})
export class ShopStartComponent implements OnInit {

  prods:Product[] = []

  constructor(private dataService:DataService,private cartService:CartService) { }

  ngOnInit(): void {
    this.dataService.getAllData().subscribe(data => {
      this.prods = data
    })
  }

  sendToCart(id:any){
    this.dataService.getOneProduct(id).subscribe(prod => {
      this.cartService.getProds(prod,1)
    })
    this.cartService.qty.next(1)
  }

}
