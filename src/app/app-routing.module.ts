import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { AuthComponent } from './profile/auth/auth.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './services/auth.guard';
import { CategoriesComponent } from './shop/categories/categories.component';
import { ShopStartComponent } from './shop/shop-start/shop-start.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'products/:category/:id' , component:ProductsDetailsComponent},
  {path:'cart' , component:ShoppingCartComponent},
  {path:'search/:searchWord' , component:SearchComponent},
  {path:'shop' , component:ShopComponent , children:[
    {path:'' , component:ShopStartComponent},
    {path:'category' , redirectTo:'/shop' ,pathMatch:'full'},
    {path:'category/:cat' , component:CategoriesComponent}
  ]},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent},
  {path:'auth' , component:AuthComponent , canActivate:[AuthGuard]},
  {path:'**' , redirectTo:'/home' , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
