import React from 'react';
import { render, screen } from '../test/test-utils';
import userEvent from '@testing-library/user-event';
import { Menu } from './Menu';

test('renders correctly', async () => {
    render(<Menu />);

    const all = screen.getByRole('button', { name: /all/i });
    expect(all).toBeInTheDocument();

    const breakfast = screen.getByRole('button', { name: /breakfast/i });
    expect(breakfast).toBeInTheDocument();

    const lunch = screen.getByRole('button', { name: /lunch/i });
    expect(lunch).toBeInTheDocument();

    const shakes = screen.getByRole('button', { name: /shakes/i });
    expect(shakes).toBeInTheDocument();
});

test('can interact with ui', async () => {
    const allRecipes = jest.fn();
    const breakfastRecipes = jest.fn();
    const lunchRecipes = jest.fn();
    const shakesRecipes = jest.fn();
    const stubMenuHook = () => ({
        allRecipes,
        breakfastRecipes,
        lunchRecipes,
        shakesRecipes,
    });

    render(<Menu useMenuContext={stubMenuHook} />);

    const all = screen.getByRole('button', { name: /all/i });
    userEvent.click(all);
    expect(allRecipes).toHaveBeenCalledTimes(1);

    const breakfast = screen.getByRole('button', { name: /breakfast/i });
    userEvent.click(breakfast);
    expect(breakfastRecipes).toHaveBeenCalledTimes(1);

    const lunch = screen.getByRole('button', { name: /lunch/i });
    userEvent.click(lunch);
    expect(lunchRecipes).toHaveBeenCalledTimes(1);

    const shakes = screen.getByRole('button', { name: /shakes/i });
    userEvent.click(shakes);
    expect(shakesRecipes).toHaveBeenCalledTimes(1);
});
