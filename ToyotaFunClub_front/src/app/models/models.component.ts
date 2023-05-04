import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from '../model';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private modelsService: ProductService) { }

  models: Model[]

  ngOnInit(): void {
    this.getModels()
  }

  getModels(): void {
    this.modelsService.getModel().subscribe( 
      data => {
        console.log(data)
        this.models = data;
      },
      error =>{
        console.log(error);
      }
    )
  }
}
