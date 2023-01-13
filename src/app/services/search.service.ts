import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "../interfaces/product";
import { DataService } from "./data.service";

@Injectable({
  providedIn: 'root'
})

export class SearchService{

  // searchedProducts:Product[] = []

  // allData:Product[] = []

  searchWord = new Subject<string>()

  // searchInData(word:string){
  //   if (word) {
  //     for (let i = 0; i < this.allData.length; i++) {
  //       if (this.allData[i].title?.toLowerCase().includes(word.toLowerCase())) {
  //         if (this.searchedProducts.includes(this.allData[i])) {
  //           console.log("Found");

  //         }else{
  //           this.searchedProducts.push(this.allData[i])
  //           console.log(this.searchedProducts);
  //         }


  //       }else{
  //         console.log("Not Found");
  //       }
  //     }
  //   }

  // }

  constructor(private dataService:DataService){
    // this.dataService.getAllData().subscribe(data => {
    //   this.allData = data
    // })
  }

}
