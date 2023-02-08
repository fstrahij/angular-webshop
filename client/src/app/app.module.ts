import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ErrorInterceptor } from './shared/interceptors/error/error.interceptor';
import { LoadingDirective } from './shared/directives/loading/loading.directive';
import { LoaderComponent } from './shared/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    LoaderComponent,
    LoadingDirective,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
