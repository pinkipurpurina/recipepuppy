import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [RecipeComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class HomeModule { }
