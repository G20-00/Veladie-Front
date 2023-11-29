import { Component } from '@angular/core';
import { filters, singleFilter } from './FilterData';
import { mensPantsPage1 } from 'src/Data/pants/men_page1';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
filterData: any
singleFilterData:any
menPants:any 
ngOnInit(){
  this.filterData = filters;
  this.singleFilterData = singleFilter
  this.menPants=mensPantsPage1
}
}
