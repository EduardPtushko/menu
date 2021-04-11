import React from 'react';
import { observer } from 'mobx-react-lite';
import { useMenuContext as useMenuHook } from '../contexts/menu-context';
import { Nav, List } from './style';

interface MenuProps {
    useMenuContext?: () => Pick<
        ReturnType<typeof useMenuHook>,
        'allRecipes' | 'breakfastRecipes' | 'lunchRecipes' | 'shakesRecipes'
    >;
}

export const Menu: React.FC<MenuProps> = observer(
    ({ useMenuContext = useMenuHook }) => {
        const menu = useMenuContext();

        const getAllRecipes = () => {
            menu.allRecipes();
        };
        const getBreakfastRecipes = () => {
            menu.breakfastRecipes();
        };
        const getLunchRecipes = () => {
            menu.lunchRecipes();
        };
        const getShakesRecipes = () => {
            menu.shakesRecipes();
        };

        return (
            <Nav>
                <List>
                    <button onClick={getAllRecipes}>All</button>
                    <button onClick={getBreakfastRecipes}>Breakfast</button>
                    <button onClick={getLunchRecipes}>Lunch</button>
                    <button onClick={getShakesRecipes}>Shakes</button>
                </List>
            </Nav>
        );
    },
);
