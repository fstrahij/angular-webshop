import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product/product.model'
import { ProductService } from '../services/productService/product-service.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	products = [];	
	product = new Product(
		'coton mask',
		9.99,
		'its good for protection from corona virus. It has been made from proof material',
		''
	);

	constructor(private productService: ProductService) {		
		this.setProducts();
	}

	ngOnInit(): void {
	}

	setProducts() {
		console.log("setting products");
		for (let i = 0; i < 10; i++) {
			this.products.push( this.product );
		}

		this.productService.fetch();
	}

}
