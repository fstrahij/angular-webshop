import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';


const routes: Routes = [
	{
		path: '',
		component: ProductsComponent,
		redirectTo: 'products',
		pathMatch: 'full'
	},
	{
		path: 'products',
		component: ProductsComponent
	},
	{
		path: 'products/:id',
		component: ProductDetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
