import { MaterialModule } from './../../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';

@NgModule({
  declarations: [RecipeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    RecipeComponent
  ]

})
export class RecipeModule { }
