import express, { Request, Response } from 'express';
import { Recipe } from '../models/recipe';

const router = express.Router();

router.get('/api/recipes', async (req: Request, res: Response, next) => {
    try {
        const recipes = await Recipe.find();

        res.send(recipes);
    } catch (error) {
        next(error);
    }
});

router.post('/api/recipes', async (req: Request, res: Response, next) => {
    const body = req.body;
    try {
        const recipe = new Recipe(body);
        await recipe.save();
        res.status(201).send(recipe);
    } catch (error) {
        next(error);
    }
});

router.get(
    '/api/recipes/:recipeId',
    async (req: Request, res: Response, next) => {
        const { recipeId } = req.params;

        try {
            const recipe = await Recipe.findById(recipeId);

            res.send(recipe);
        } catch (error) {
            next(error);
        }
    }
);

router.put(
    '/api/recipes/:recipeId',
    async (req: Request, res: Response, next) => {
        const { recipeId } = req.params;
        const { body } = req;

        try {
            const recipe = await Recipe.findByIdAndUpdate(recipeId, body, {
                new: true,
            });

            res.send(recipe);
        } catch (error) {
            next(error);
        }
    }
);

export { router as recipeRouter };
