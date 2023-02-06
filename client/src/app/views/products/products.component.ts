import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/productService/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	products: Product[] = [];
	isLoading = true;	

	constructor(private productService: ProductService) {
	}

	ngOnInit(): void {		
		this.setProducts();
	}

	setProducts() {
		this.productService
			.fetch()
			.subscribe(products =>{				
				console.info('fetched products', products);
				this.products = [ ...products, ...products ];
				this.isLoading = false;
			});
	}
}
