import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  fetch(){
  	console.log('fetching data...');

  	return this.http.get<Product[]>(environment.api.product)
  		.pipe(map(products =>{
  			return products;
  		}));
  }
}
