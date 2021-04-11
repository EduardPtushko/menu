import React from 'react';
import { useMenuContext as useMenuHook } from '../contexts/menu-context';
import { observer } from 'mobx-react-lite';
import { Recipe } from '../Recipe';
import { Block } from './style';
import { Spinner } from '../Spinner';

interface RecipesProps {
    useMenuContext?: () => Pick<
        ReturnType<typeof useMenuHook>,
        'recipes' | 'isLoading' | 'error'
    >;
}

export const Recipes: React.FC<RecipesProps> = observer(
    ({ useMenuContext = useMenuHook }) => {
        const { isLoading, error, recipes } = useMenuContext();

        if (isLoading) {
            return (
                <Block>
                    <Spinner />
                </Block>
            );
        }

        if (error) {
            return (
                <Block>
                    <p>There is error {error}</p>
                </Block>
            );
        }

        return (
            <Block>
                {recipes.map((el) => (
                    <Recipe key={el.id} recipe={el} />
                ))}
            </Block>
        );
    },
);
