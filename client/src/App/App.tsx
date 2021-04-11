import React from 'react';
import { MenuProvider } from '../contexts/menu-context';
import { GlobalStyle } from '../globalStyle';
import { Menu } from '../Menu';
import { Recipes } from '../Recipes';
import { Container, Header, Heading, Underline } from './style';

export const App: React.FC = () => {
    return (
        <Container>
            <Header>
                <Heading>Our Menu</Heading>
                <Underline></Underline>
            </Header>
            <MenuProvider>
                <Menu />
                <Recipes />
            </MenuProvider>
            <GlobalStyle />
        </Container>
    );
};
