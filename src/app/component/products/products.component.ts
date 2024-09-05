import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from '../../model/coffee';
import { CoffeeService } from '../../services/coffee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


  filteredProducts: Coffee[] = [];
  drinkList: Coffee[] = [];

  constructor(private coffeeService: CoffeeService, private actRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.loadCoffee();
  }

  deleteCoffee(id: number) {
    this.coffeeService.deleteCoffeeById(id).subscribe(response => {
      console.log(response);
      this.loadCoffee();
    });
  }

  loadCoffee() {
    this.coffeeService.getCoffees().subscribe(foundCoffees => {
      this.drinkList = foundCoffees;
      this.filteredProducts = foundCoffees;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProducts = this.drinkList;
    } else {

      this.filteredProducts = this.drinkList.filter(
        coffee =>
          coffee?.name.toLowerCase().includes(text.toLowerCase())
      );
    }

  }
}