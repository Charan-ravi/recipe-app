import { Component } from '@angular/core';
import { ShoppingEditListComponent } from '../shopping-edit-list/shopping-edit-list.component';
import { Ingredient } from '../../shared/ingredient.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  imports: [ShoppingEditListComponent,CommonModule],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 4),
    new Ingredient('Orange', 6),
  ];
}
