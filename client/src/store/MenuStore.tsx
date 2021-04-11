import { makeAutoObservable } from 'mobx';
import { RecipeType } from '../recipeType';
import { MenuService } from './MenuService';

export class MenuStore {
    url = 'http://localhost:5000/api/recipes';
    fetchedRecipes: RecipeType[] = [];
    recipes: RecipeType[] = [];
    error: string | null = null;
    isLoading = false;

    constructor(private menuService: MenuService) {
        makeAutoObservable(this);

        this.loadRecipes();
    }

    async loadRecipes() {
        try {
            const recipes = await this.menuService.fetchRecipes(this.url);
            this.recipes = recipes;
            this.fetchedRecipes = recipes;
        } catch (error) {
            console.log(error);
            this.error = error.message;
        }
    }

    allRecipes() {
        this.recipes = this.fetchedRecipes;
        this.loadRecipes();
    }

    breakfastRecipes() {
        this.recipes = this.fetchedRecipes.filter(
            (r) => r.category === 'breakfast',
        );
    }

    lunchRecipes() {
        this.recipes = this.fetchedRecipes.filter(
            (r) => r.category === 'lunch',
        );
    }

    shakesRecipes() {
        this.recipes = this.fetchedRecipes.filter(
            (r) => r.category === 'shakes',
        );
    }
}
