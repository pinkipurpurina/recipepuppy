import { MaterialModule } from './../../../shared/modules/material/material.module';
import { RecipeModule } from './../../../shared/components/recipe/recipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    //RecipeModule,
    FormsModule,
   SharedModule,
   // MaterialModule
  ]
})
export class HomeModule { }
