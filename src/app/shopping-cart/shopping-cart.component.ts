import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit  {

  products:any[] = []
  sum = 0;
  promoTest:string = "shady";
  shipping = 5

  constructor(private dataService:DataService, private cartService:CartService, private router:Router) { }


  ngOnInit(): void {
    // this.cartService.id.subscribe(id => {
    //   this.id = id
    //   console.log(id);
    //   this.dataService.getOneProduct(this.id).subscribe(product => {
    //     this.products.push(product)
    //     console.log(this.products);

    //   })
    // })

    this.products = this.cartService.productsInCart
    for (let i = 0; i < this.products.length; i++) {
      this.sum += this.products[i].price
    }

  }

  removeProduct(id:number){
    this.products.splice(id,1)
    if (this.products.length == 0) {
      this.cartService.qty.next(0)
    }
  }

  checkout(){
    if (localStorage.getItem('userData')) {
      alert("Redirect To Payment Page")
    }else{
      this.router.navigate(['/auth'])
    }
  }

  tryPromo(event:any){
    event.preventDefault()
    console.log(event.target.previousSibling.value);
    if (event.target.previousSibling.value == this.promoTest) {
      this.shipping = 0;
    }
  }

}
