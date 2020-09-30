import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TypeComponent } from './type/type.component';
import { SlideComponent } from './slide/slide.component';
import { SlideTypeComponent } from './slide-type/slide-type.component';
import { ProductComponent } from './product/product.component';
import { InforComponent } from './infor/infor.component';
import { LaterProductsComponent } from './later-products/later-products.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TypeComponent,
    SlideComponent,
    SlideTypeComponent,
    ProductComponent,
    InforComponent,
    LaterProductsComponent,
    BlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
