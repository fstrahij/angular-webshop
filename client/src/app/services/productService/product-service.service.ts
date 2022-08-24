import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { }

  fetch(){
  	console.log('fetching data...');
  }
}
