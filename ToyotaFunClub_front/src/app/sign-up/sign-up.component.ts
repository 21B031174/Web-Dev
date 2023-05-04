import { Component, OnInit } from '@angular/core';
// import { User } from '../User';
import { ProductService } from '../services/product.service'
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class 

SignUpComponent implements OnInit {

  constructor(private apiUser:ProductService) { }

  formRegister = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
  });

  ngOnInit(): void {
    
  }

registration(){
  console.log("Start...")
  const formData = this.formRegister.value
  console.log(formData)
  this.createUser(formData.username, formData.password);
}

  createUser(username, password){
    this.apiUser.createUser(username,password).subscribe(
      data => {
        console.log("create")
      },
      error => {
        console.log(error);
      }
    )
  }

}
