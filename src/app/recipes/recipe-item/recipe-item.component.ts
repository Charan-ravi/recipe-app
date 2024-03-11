import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  standalone:true,
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RecipeItemComponent {

}
