import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addres-form',
  templateUrl: './addres-form.component.html',
  styleUrls: ['./addres-form.component.scss']
})
export class AddresFormComponent {
  adresses =[1,1,1]
  myForm:FormGroup=this.formBuilder.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    streetAddress:["",Validators.required],   
    city:["",Validators.required],   
    state:["",Validators.required],   
    zipCode:["",Validators.required],   
    mobile:["",Validators.required],   
  })
  constructor(private formBuilder:FormBuilder){

  }
  handleCreateOrder(item:any){

  }
  handleSubmit=()=>{
    const formValue=this.myForm.value 
    console.log("Data", formValue)

  }
}
