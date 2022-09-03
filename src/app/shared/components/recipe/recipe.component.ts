import { Recipe } from 'src/app/shared/modals/interface/recipe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input()  item: Recipe;
  panelOpenState:boolean=false
  constructor() { }

  ngOnInit(): void {
    console.log(this.item);

  }

}
