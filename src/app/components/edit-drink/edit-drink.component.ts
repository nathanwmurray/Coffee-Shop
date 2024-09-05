import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../model/coffee';
import { CoffeeService } from '../../services/coffee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-drink',
  templateUrl: './edit-drink.component.html',
  styleUrl: './edit-drink.component.css'
})
export class EditDrinkComponent implements OnInit {

  id: number = 0;

  currentCoffee = new Coffee();

  constructor(private coffeeService: CoffeeService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    console.log('routeId:', routeId);
    this.id = parseInt(routeId);
    console.log('this.id:', this.id);
    this.coffeeService.getCoffeeById(this.id).subscribe(foundCoffee => {
      console.log(foundCoffee);
      this.currentCoffee = foundCoffee;
    });
  }


  onSubmit() {
    this.coffeeService.editCoffee(this.id, this.currentCoffee).subscribe(editedCoffee => {
      console.log(editedCoffee);
      this.router.navigateByUrl("/products");
    });
  }
}
