import React from 'react';
import { render, screen } from '@testing-library/react';
import { Recipe } from './Recipe';
import { recipes } from '../test/fixture/recipes';

const recipe = recipes[0];

test('renders correct properties', async () => {
    render(<Recipe recipe={recipe} />);

    expect(
        screen.getByRole('heading', { name: recipe.title }),
    ).toBeInTheDocument();
    expect(
        screen.getByRole('heading', { name: String(recipe.price) }),
    ).toBeInTheDocument();
    expect(screen.getByText(recipe.desc)).toBeInTheDocument();
});

test('uses correct  src and alt attributes', async () => {
    render(<Recipe recipe={recipe} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', expect.stringContaining(recipe.img));
    expect(image).toHaveAttribute('alt', recipe.title);
});
