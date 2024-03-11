import { Component } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-recipes',
  standalone:true,
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  imports:[RecipeListComponent,RecipeDetailComponent]
})
export class RecipesComponent {

}