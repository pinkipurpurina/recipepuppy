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
  get recipes() {
    return this.recipesService.recipes;
  }
  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {//beers

  }
  send() {
    this.recipesService.getRecipes(this.myControl.value).subscribe({
      next: data => {
        this.createCards()
      },
    })
  }
  createCards() {

  }
}
