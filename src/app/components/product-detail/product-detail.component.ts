import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../model/coffee';
import { CoffeeService } from '../../services/coffee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  id: number = 0;

  currentCoffee: Coffee = new Coffee()

  constructor(private coffeeService: CoffeeService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.coffeeService.getCoffeeById(this.id).subscribe(singleCoffee => {
      console.log('Got it:', singleCoffee);
      this.currentCoffee = singleCoffee;

    });
  }
}
