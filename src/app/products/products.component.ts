import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Analog Watch',
      price: 109,
      color: 'black',
      available: 'Available',
      image: './assets/products/watch.png',
    },
    {
      id: 2,
      name: 'Ultra HD Smart TV',
      price: 3339,
      color: 'black',
      available: 'Available',
      image: './assets/products/tv.png',
    },
    {
      id: 3,
      name: 'Apple iPhone 12',
      price: 2220,
      color: 'black',
      available: 'Not Available',
      image: './assets/products/phone.png',
    },
    {
      id: 4,
      name: 'Washing Machine',
      price: 2222,
      color: 'white',
      available: 'Available',
      image: './assets/products/wmachine.png',
    },
    {
      id: 5,
      name: 'LG Refrigerator',
      price: 1645,
      color: 'white',
      available: 'Not Available',
      image: './assets/products/fridge.png',
    },
    {
      id: 6,
      name: 'DELL Inspiron Ryzen 7',
      price: 1234,
      color: 'white',
      available: 'Available',
      image: './assets/products/laptop.png',
    }
  ];
}
