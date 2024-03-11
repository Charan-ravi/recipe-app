import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { RecipeModel } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  imports: [RecipeItemComponent,CommonModule],
})
export class RecipeListComponent implements OnInit {
  recipes:RecipeModel[] = [
    new RecipeModel("A Test Recipe","Sample Description","https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D"),
    new RecipeModel("A Test Recipe","Sample Description","https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D"),
    new RecipeModel("A Test Recipe","Sample Description","https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D")
  ];
  constructor() {}
  ngOnInit() {}
}
