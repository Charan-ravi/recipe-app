import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RecipesComponent } from '../recipes.component';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RecipeItemComponent {
  @Input()
  recipe!: RecipeModel;
  @Output() recipeSelected = new EventEmitter<void>();

  onSelected() {
    this.recipeSelected.emit();
  }
}
