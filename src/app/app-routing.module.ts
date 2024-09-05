import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ProductsComponent } from './component/products/products.component';
import { CreateDrinkComponent } from './components/create-drink/create-drink.component';
import { EditDrinkComponent } from './components/edit-drink/edit-drink.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "products", component: ProductsComponent},
  { path: "add", component: CreateDrinkComponent},
  { path: "edit/:id", component: EditDrinkComponent},
  { path: "products/:id", component: ProductDetailComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
