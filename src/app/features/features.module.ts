import { RecipeModule } from './../shared/components/recipe/recipe.module';
import { SharedModule } from './../shared/shared.module';
import { HomeModule } from './components/home/home.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    RecipeModule,
    SharedModule
  ]
})
export class FeatureModule { }
