import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myControl = new FormControl();
  texto: any;
  error: string;
  get recipes() {
    return this.recipesService.recipes;
  }
  constructor(private recipesService: RecipesService, private _snackBar: MatSnackBar) { }
  //constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {//beers

  }

  send(event: any) {
    setTimeout(() => {
      this.recipesService.getRecipes(event.target.value).subscribe({
        next: data => {
          this.error = '';
          this.dismissSnackBar();
        },
        error: err => {
          console.error(err);
          console.error(err.error.error);
          this.error = err.error.error;
          this.recipesService.resetRecipes();
          if (err.error.statusCode = 404) {
            this.openSnackBar('No se encontró la receta', 'Error')
          }
        },
      })
    }, 1500);

  }
  openSnackBar(message: string, action: string) {

    this._snackBar.open(message, action);
  }
  dismissSnackBar() {

    this._snackBar.dismiss();
  }
}
