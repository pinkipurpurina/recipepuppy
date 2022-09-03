import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/modals/interface/recipe';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private url = 'https://api.punkapi.com/v2/'//https://api.punkapi.com/v2/beers
  _recipes: Array<Recipe> = [];

  get recipes(){
    return [...this._recipes]
  }
  resetRecipes(){
   this._recipes =[]
  }
  constructor(private http: HttpClient) { }

  getRecipes(recipe: string): Observable<any> {
    return this.http.get<any>(this.url + recipe).pipe(
      map(data => {
        if (data) {
          this._recipes = data
        }

      })
      // catchError(this.handleError)
      )
  }
  // handleError(error){
  //   console.log(error);

  // }
}
