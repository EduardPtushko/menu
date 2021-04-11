import React from 'react';
import { render, screen } from '../test/test-utils';
import { Recipes } from './Recipes';
import { recipes } from '../test/fixture/recipes';
import { RecipeProps } from '../Recipe';

jest.mock('../Recipe', () => ({
    Recipe: ({ recipe }: RecipeProps) => {
        const { img, title, price, desc } = recipe;

        return (
            <div>
                {title} {price} {desc} {img}
            </div>
        );
    },
}));

test('renders Spinner on loading state', async () => {
    const stubMenuHook = () => ({
        isLoading: true,
        error: null,
        recipes: [],
    });
    render(<Recipes useMenuContext={stubMenuHook} />);

    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
});

test('renders error message on error ', async () => {
    const stubMenuHook = () => ({
        isLoading: false,
        error: 'Bad request',
        recipes: [],
    });
    render(<Recipes useMenuContext={stubMenuHook} />);

    expect(screen.getByText(/bad request/i)).toBeInTheDocument();
});

test('renders recipes', async () => {
    const stubMenuHook = () => ({
        isLoading: false,
        error: null,
        recipes,
    });
    const { container } = render(<Recipes useMenuContext={stubMenuHook} />);
    const rsp1 = recipes[0];
    const rsp2 = recipes[1];

    expect(container.innerHTML).toMatch(
        `${rsp1.title} ${rsp1.price} ${rsp1.desc} ${rsp1.img}`,
    );
    expect(container.innerHTML).toMatch(
        `${rsp2.title} ${rsp2.price} ${rsp2.desc} ${rsp2.img}`,
    );
});
