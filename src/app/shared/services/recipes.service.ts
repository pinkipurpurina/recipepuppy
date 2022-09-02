import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/modals/interface/recipe';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
private url = 'http://www.recipepuppy.com/api/'
  constructor(private http: HttpClient) {   }

  getRecipes(recipe:string): Observable<any>{
    return this.http.get<any>('https://api.punkapi.com/v2/beers').pipe(
      map(data => {
          if(data){
            console.log(data);

          }
    }))
  }
}
