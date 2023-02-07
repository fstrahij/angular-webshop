import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/productService/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
	products: Product[] = [];
	isLoading = true;	
	finish$ = new Subject();

	constructor(private productService: ProductService) {}

	ngOnInit(): void {		
		this.setProducts();
	}

	setProducts() {
		this.productService
			.fetch()
			.pipe( takeUntil(this.finish$) )
			.subscribe(products =>{				
				console.info('fetched products', products);

				this.products = [ ...products, ...products ];
				this.isLoading = false;
			});
	}

	trackByProducts(index: number, product: Product){
		return product.id;
	}

	ngOnDestroy(){
		this.finish$.next();
		this.finish$.complete();
	}
}
