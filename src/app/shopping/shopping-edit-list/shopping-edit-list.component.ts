import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit-list',
  standalone: true,
  templateUrl: './shopping-edit-list.component.html',
  styleUrls: ['./shopping-edit-list.component.css'],
})
export class ShoppingEditListComponent {
  @ViewChild('nameInput')
  nameInputRef!: ElementRef;
  @ViewChild('amountInput')
  amountInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
