import { Component } from '@angular/core';
import { ShoppingEditListComponent } from '../shopping-edit-list/shopping-edit-list.component';

@Component({
  selector: 'app-shopping-list',
  standalone:true,
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  imports:[ShoppingEditListComponent]
})
export class ShoppingListComponent {

}
