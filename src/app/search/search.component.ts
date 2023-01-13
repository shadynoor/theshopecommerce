import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../interfaces/product';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products:Product[] = []
  searchedProducts:Product[] = []
  searchDone = false

  constructor(private searchService:SearchService , private dataService:DataService , private activatedRoute:ActivatedRoute , private cartService:CartService) { }

  ngOnInit(): void {
    // this.products = this.searchService.searchedProducts

    this.dataService.getAllData().subscribe(data => {
      this.products = data;
          this.activatedRoute.params.subscribe((params:Params) => {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].title?.toLowerCase().includes(params['searchWord'].toLowerCase())) {
            this.searchedProducts.push(this.products[i])
            this.searchDone = true
          }
        }
      })

    })

      // this.searchService.searchWord.subscribe(word => {
      //   this.dataService.getAllData().subscribe(data => {
      //     this.products = data
      //   })
      //   for (let i = 0; i < this.products.length; i++) {
      //     if (this.products[i].title?.toLowerCase().includes(word.toLowerCase())) {
      //       this.searchedProducts.push(this.products[i])
      //     }
      //   }
      //   console.log(this.searchedProducts);
      // })




  }

  sendToCart(id:any){
    this.dataService.getOneProduct(id).subscribe(prod => {
      this.cartService.getProds(prod,1)
    })
    this.cartService.qty.next(1)
  }

}
