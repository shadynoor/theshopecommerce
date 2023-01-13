import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit ,OnDestroy {

  @ViewChild('search' , {static:true}) search!:ElementRef

  searchWord!:string
  index:number = 0
  sub!:Subscription
  authSub!: Subscription
  isAuth = false

  constructor(private cartService:CartService, private authService:AuthService, private router:Router , private searchServ:SearchService) { }

  ngOnInit(): void {
    this.sub = this.cartService.qty.subscribe(qty => {
      this.index = qty
    })

    this.authSub = this.authService.user.subscribe((user) => {
      this.isAuth = !!user
    })

    if (localStorage.getItem('userData')) {
      this.isAuth = true
    }

  }

  logout(){
    this.isAuth = false
    this.authService.logout()
  }

  close(){
    this.search.nativeElement.style.opacity = "0"
    this.search.nativeElement.style.visibility = "hidden"
  }

  showSearch(){
    this.search.nativeElement.style.opacity = "1"
    this.search.nativeElement.style.visibility = "visible"
  }
  searchBtn(){
    // this.searchServ.searchInData(this.searchWord)
    if (this.searchWord) {
      this.searchServ.searchWord.next(this.searchWord)
      this.search.nativeElement.style.opacity = "0"
      this.search.nativeElement.style.visibility = "hidden"
      this.router.navigate(['/search' , this.searchWord])
    }

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
