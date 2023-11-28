import { Component , Input} from '@angular/core';
import{navigation} from './nav-content'
@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent {
category:any;
@Input() selectedSection:any;



ngOnInit(){
  this.category=navigation;
  console.log("carajo ",navigation)
  console.log("Contenido de 'Men' sections:", this.category.categories.find((cat: { id: string; }) => cat.id === 'men')?.sections);
  console.log(`Valor de selectedSection: ${this.selectedSection}`);
}
}
