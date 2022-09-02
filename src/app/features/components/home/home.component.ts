import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private recipesService : RecipesService) { }

  ngOnInit(): void {
    this.recipesService.getRecipes('beer').subscribe({

    })

  }

}
