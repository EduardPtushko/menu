import { render as tlRender } from '@testing-library/react';
import { MenuProvider } from '../contexts/menu-context';
import React from 'react';

const render = (ui: any) => {
    const Wrapper: React.FC = ({ children }) => {
        return <MenuProvider>{children}</MenuProvider>;
    };

    return tlRender(ui, { wrapper: Wrapper });
};

export * from '@testing-library/react';
export { render };
