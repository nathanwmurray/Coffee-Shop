import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Coffee } from '../../model/coffee';
import { CoffeeService } from '../../services/coffee.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  private logo = 'assets/logo.json';

  display!: Observable<Coffee[]>;

  constructor(private coffeeService: CoffeeService) { }


  ngOnInit(): void {
    const selectedIds = ['1', '3', '4'];
    this.display = this.coffeeService.getSelectedCoffees(selectedIds);
  }
}
