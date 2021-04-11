import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

jest.mock('../Menu', () => ({ Menu: () => <div>Menu</div> }));
jest.mock('../Recipes', () => ({ Recipes: () => <div>Recipes</div> }));

test('renders correctly', async () => {
    const { container } = render(<App />);

    expect(
        screen.getByRole('heading', { name: /our menu/i }),
    ).toBeInTheDocument();
    expect(container.innerHTML).toMatch('Menu');
    expect(container.innerHTML).toMatch('Recipes');
});
