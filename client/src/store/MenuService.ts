import { client } from '../api/client';

export class MenuService {
    async fetchRecipes(url: string) {
        return client(url);
    }
}
