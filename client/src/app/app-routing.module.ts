import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './views/products/products.component';
import { ProductDetailsComponent } from './views/products/product-details/product-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
	{
		path: '',
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
	},
	{
		path: 'page-not-found',
		component: PageNotFoundComponent
	},
	{
		path: '**',
		redirectTo: 'page-not-found',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
