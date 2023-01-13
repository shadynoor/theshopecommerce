import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products:any = []
  categories:any = []
  isActive = false

  constructor(private dataService:DataService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getAllCategories().subscribe(data => {
      this.categories = data
    })

  }

  down(){
    this.isActive = true
  }


}
