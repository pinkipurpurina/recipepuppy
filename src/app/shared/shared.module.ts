import { MaterialModule } from './modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeModule } from './components/recipe/recipe.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RecipeModule,
    MaterialModule
  ], exports: [
    RecipeModule, MaterialModule
  ]
})
export class SharedModule { }
