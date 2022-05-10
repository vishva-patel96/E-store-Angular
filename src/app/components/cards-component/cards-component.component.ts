import { Component, OnInit } from '@angular/core';
import { RawProductData } from './product-data-helper';
import { productData } from './product-data-helper';




@Component({
  selector: 'cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.scss']
})

export class CardsComponentComponent implements OnInit {
   
  public parsedProductData: any

  public showModal = false;

  constructor() { }

  ngOnInit(): void {
    
    const rawData: RawProductData[] = [
      {
      id: 0,
      item_name: 'Vegetables',
      item_description: 'These are vegetables',
      storage_location: 'Bin number 3',
      inventory_level: 5,
      image: '/assets/images/vegetables.jpg'
      },
      {
      id: 1,
      item_name: 'Fruits',
      item_description: 'These are fruits',
      storage_location: 'Bin number 19',
      inventory_level: 5,
      image: '/assets/images/vegetables.jpg'
      },
      {
      id: 2,
      item_name: 'Bread',
      item_description: 'This is bread',
      storage_location: 'Bin number 5',
      inventory_level: 5,
      image: '/assets/images/vegetables.jpg'
      },
      {
      id: 3,
      item_name: 'Milk',
      item_description: 'This is milk',
      storage_location: 'Bin number 80',
      inventory_level: 5,
      image: '/assets/images/vegetables.jpg'
      },
      {
      id: 4,
      item_name: 'Toothpaste',
      item_description: 'This is toothpaste',
      storage_location: 'Bin number 32',
      inventory_level: 5,
      image: '/assets/images/vegetables.jpg'
      },
      {
      id: 5,
      item_name: 'Soap - Bar',
      item_description: 'These are bars of soap',
      storage_location: 'Bin number 90',
      inventory_level: 5,
      image: '/assets/images/vegetables.jpg'
      }
      ];

      this.parsedProductData = productData.getProductdata(rawData);
      console.log(this.parsedProductData)
  }

  onCardClick() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
