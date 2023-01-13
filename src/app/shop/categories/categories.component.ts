import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  prods:any = []


  constructor(private dataService:DataService,private activatedRoute:ActivatedRoute , private cartService:CartService) { }

  ngOnInit(): void {
    // this.dataService.category.subscribe(cat => {
    //   this.dataService.getByCategory(cat).subscribe(data => {
    //     this.prods = data
    //     console.log(this.prods);

    //     // if (this.prods) {
    //     //   this.dataService.getAllData().subscribe(data=> {
    //     //     this.prods = data
    //     //   })
    //     // }
    //   })
    // })
    this.activatedRoute.params.subscribe((params:Params) => {
      const cat = params['cat']
      this.dataService.getByCategory(cat).subscribe(data => {
        this.prods = data
      })
    })
  }


  sendToCart(id:any){
    this.dataService.getOneProduct(id).subscribe(prod => {
      this.cartService.getProds(prod,1)
    })
    this.cartService.qty.next(1)
  }

}
