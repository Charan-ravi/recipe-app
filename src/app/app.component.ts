import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './shared/dropdown.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    RecipeListComponent,
    RecipesComponent,
    ShoppingListComponent,
    CommonModule,
    DropdownDirective
  ],
})
export class AppComponent {
  title = 'recipe-app';
  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
