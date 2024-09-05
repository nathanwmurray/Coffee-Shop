import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../model/coffee';
import { CoffeeService } from '../../services/coffee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-drink',
  templateUrl: './create-drink.component.html',
  styleUrl: './create-drink.component.css'
})
export class CreateDrinkComponent implements OnInit {

  newCoffee: Coffee = new Coffee();

  constructor(private coffeeService: CoffeeService, private router: Router) { }

  ngOnInit(): void { }


  onSubmit() {
    this.coffeeService.createNewCoffee(this.newCoffee).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/products")

    });
  }
}