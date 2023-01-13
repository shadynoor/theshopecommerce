import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { exhaustMap } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  @ViewChild('qty',{static:false}) qty!:ElementRef

  comment:string = ''
  productCat:any[] = []
  product!:Product
  allProduct!:Product[]
  id!:number;
  user:any
  // productImages:any[] = []
  productImage!:any
  comments = [
    {email: 'test@test.test' , review:'Good Product'}
  ]

  constructor(private activatedRoute:ActivatedRoute, private dataService:DataService ,private cartService:CartService , private auth:AuthService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params:Params) => {
      this.id = +params['id']
      this.dataService.getOneProduct(this.id).subscribe(data => {
        this.product = data;
        this.productImage = this.product.image

        this.dataService.getAllData().subscribe(data => {
          this.allProduct = data
          let newArr = []
          for (let i = 0; i < this.allProduct.length; i++) {
            if (this.allProduct[i].category == this.product.category && this.allProduct[i].id !== this.product.id) {
              newArr.push(this.allProduct[i])
            }
          }
          this.productCat = newArr;
          this.productCat.length = 3
        })
      })
    })

    this.user = JSON.parse(localStorage.getItem('userData') || '{}')
  }

  changeImg(img:any){
    this.product.image = img.target.src;
  }

  inc(e:any,id:any){
    let x = +e.target.previousSibling.innerHTML;
    if (+x < +id) {
      x++
    }else{
      alert(`Only ${id} Available`)
    }
    e.target.previousSibling.innerHTML = x
  }

  dec(e:any){
    let x = +e.target.nextSibling.innerHTML;
    if (x > 1) {
      x--
      e.target.nextSibling.innerHTML = x
    }
  }

  sendToCart(id:any){
    this.dataService.getOneProduct(id).subscribe(prod => {
      this.cartService.getProds(prod,+this.qty.nativeElement.innerHTML)
    })
    // this.cartService.qty.next(+this.qty.nativeElement.innerHTML)
  }

  addComment(){
    if(this.user.email){
      this.comments.push(
        {email:this.user.email , review: this.comment}
      )
    }
  }

}
