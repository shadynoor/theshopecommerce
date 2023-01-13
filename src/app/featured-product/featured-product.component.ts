import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit {
  products:any

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getAllData().subscribe(data => {
      this.products = data;
      this.products = this.products.sort(() => {
        return 0.5 - Math.random()
      })
      this.products.length = 3
    })
  }

}
