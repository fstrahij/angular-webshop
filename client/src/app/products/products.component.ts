import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	products = [];	
	product = {
		name: 'coton mask',
		price: 9.99,
		description: 'its good for protection from corona virus. It has been made from proof material',
		img: ''
	};

	constructor() {		
		this.setProducts();
	}

	ngOnInit(): void {
	}

	setProducts() {
		console.log("setting products");
		for (let i = 0; i < 10; i++) {
			this.products.push( this.product );
		}
	}

}
