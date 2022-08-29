import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product/product.model';
import { ProductService } from '../services/productService/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
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
				this.products = [ ...products ];
				this.isLoading = false;
			});
	}

}
