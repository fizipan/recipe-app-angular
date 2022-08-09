import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(1, 'Test Recipe', 'This is a simply test', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2018/09/Beef-casserole-recipe.jpg'),
    new Recipe(1, 'Test Recipe 2', 'This is a simply test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdj8NBHGfP_iidEAShGcpHWQDRtR-Y9AWx6g&usqp=CAU')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
