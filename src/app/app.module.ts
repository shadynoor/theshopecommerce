import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProfileComponent } from './profile/profile.component';
import { MainSliderComponent } from './sliders/main-slider/main-slider.component';
import { MutliSliderComponent } from './sliders/mutli-slider/mutli-slider.component';
import { CategoryHighlightComponent } from './category-highlight/category-highlight.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SlicePipe } from './shared/slice.pipe';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './shop/categories/categories.component';
import { ShopStartComponent } from './shop/shop-start/shop-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './profile/auth/auth.component';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    ShoppingCartComponent,
    ProfileComponent,
    MainSliderComponent,
    MutliSliderComponent,
    CategoryHighlightComponent,
    FeaturedProductComponent,
    SlicePipe,
    ProductsDetailsComponent,
    FooterComponent,
    CategoriesComponent,
    ShopStartComponent,
    AuthComponent,
    SearchComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
