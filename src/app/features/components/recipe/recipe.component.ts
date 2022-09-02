import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe : any
  panelOpenState:boolean=false
  constructor() { }

  ngOnInit(): void {
    console.log(this.recipe);

  }

}
