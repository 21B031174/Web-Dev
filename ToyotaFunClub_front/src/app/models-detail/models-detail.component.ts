import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Model } from '../model'; / //
import { ProductService } from '../services/product.service';
import { Cars } from '../cars';

@Component({
  selector: 'app-models-detail',
  templateUrl: './models-detail.component.html',
  styleUrls: ['./models-detail.component.css']
})
export class ModelsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private modelsService: ProductService) { }

  models: Cars[]

  selectedCars: Cars

  ngOnInit(): void {
    this.getModels()
  }

  getModels(): void {
    this.modelsService.getModel().subscribe( models => this.models = models)
  }

  onSelect(cars: Cars): void{
    this.selectedCars = cars;
  }

}
