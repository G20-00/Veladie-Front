import { Component } from '@angular/core';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { menJeans } from 'src/Data/Men/men_jeans';
import { lehngacholiPage2 } from 'src/Data/Saree/lenghaCholiPage2';
import { mensShoesPage1 } from 'src/Data/Men/shoes';
import { mens_kurta } from 'src/Data/Men/men_kurta';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menJeans: any 
  womenShirt:any
  WomanDress : any
  menShirt : any
  shoes : any
  ngOnInit(){
    this.menJeans = menJeans.slice(0,4)
    this.womenShirt = gounsPage1.slice(0,4)
    this.WomanDress = lehngacholiPage2.slice(0,4)
    this.shoes= mensShoesPage1.slice(0,4)
    this.menShirt = mens_kurta.slice(0,4)
  }
}
