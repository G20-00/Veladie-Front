import { Component } from '@angular/core';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { menJeans } from 'src/Data/Men/men_jeans';
import { lehngacholiPage2 } from 'src/Data/Saree/lenghaCholiPage2';
import { mensShoesPage1 } from 'src/Data/Men/shoes';
import { mens_kurta } from 'src/Data/Men/men_kurta';
import { ProductService } from './../../../../State/Product/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menJeans: any 
  
  data : any
  constructor(private productService: ProductService){}
  ngOnInit(){
    this.productService.findAll().subscribe(
      (result) => {
        // Manejar los datos aquí si la solicitud fue exitosa
        console.log('Datos obtenidos:', result);
        this.data =result
        console.log(" home " , this.data )
        const jeans = [{'brand': this.data.payload[0].name ,
        "imageUrl":"https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70",
        "title":this.data.payload[0].description },{
          'brand': this.data.payload[1].name ,
        "imageUrl":"https://rukminim1.flixcart.com/image/612/612/kmns7m80/jean/9/5/o/36-black-36-coper-buck-original-imagfg9edbsneu2s.jpeg?q=70",
        "title":this.data.payload[1].description
        },
      {
        'brand': this.data.payload[2].name ,
        "imageUrl":"https://rukminim1.flixcart.com/image/612/612/xif0q/jean/z/n/u/32-ecskn-01bb-002-spykar-original-imaghxqwuw67ywfy.jpeg?q=70",
        "title":this.data.payload[2].description
      }]
        this.menJeans = jeans
     
      },
      (error) => {
        // Manejar errores aquí
        console.error('Error en la solicitud:', error);
      }
    );
    
  }
}
