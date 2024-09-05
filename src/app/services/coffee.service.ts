import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Coffee } from '../model/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private coffeeUrl = 'http://localhost:3000/coffee';

  constructor(private http: HttpClient) { }

  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.coffeeUrl);
  }

  getCoffeeById(id: number): Observable<Coffee> {
    return this.http.get<Coffee>(this.coffeeUrl + "/" + id);
  }

  createNewCoffee(newCoffee: Coffee): Observable<Coffee> {
    return this.http.post<Coffee>(`${this.coffeeUrl}`, newCoffee);
  }

  editCoffee(id: number, editedCoffee: Coffee): Observable<Coffee> {
    return this.http.put<Coffee>(`${this.coffeeUrl}/${id}`, editedCoffee);
  }

  deleteCoffeeById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.coffeeUrl}/${id}`);
  }

  getSelectedCoffees(ids: string[]): Observable<Coffee[]> {
    return this.getCoffees().pipe(
      map(coffees => coffees.filter(coffee => ids.includes(coffee.id.toString())))
    );
  }


}
