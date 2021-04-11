import React from 'react';
import { Container, Image, Header, Description } from './style';
import { RecipeType } from '../../../server/src/recipe-type';

export interface RecipeProps {
    recipe: RecipeType;
}

export const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
    const { img, title, price, desc } = recipe;

    return (
        <Container>
            <Image>
                <img
                    src={`http://localhost:5000/api/images/` + img}
                    alt={title}
                />
            </Image>
            <Header>
                <h3>{title}</h3>
                <h4>{price}</h4>
            </Header>

            <Description>{desc}</Description>
        </Container>
    );
};
