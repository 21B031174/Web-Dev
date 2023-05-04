import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { BasketComponent } from './basket/basket.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component'
import { ModelsDetailComponent } from './models-detail/models-detail.component'
const routes: Routes = [
  { path: 'home', component: HomeComponent},

  { path: 'models', component: ModelsComponent},
  { path: 'models/:modelsId', component: ModelsDetailComponent},

  { path: 'cars', component: CarsListComponent},
  { path: 'cars/:carsId', component: CarsDetailComponent},

  { path: 'basket', component: BasketComponent},
  
  { path: '', component: LoginComponent},

  { path: 'signUp', component: SignUpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
