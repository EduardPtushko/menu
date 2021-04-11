import React, { createContext, useContext } from 'react';
import 'whatwg-fetch';
import { MenuService } from '../store/MenuService';
import { MenuStore } from '../store/MenuStore';

const MenuContext = createContext<MenuStore | undefined>(undefined);

const useMenuContext = () => {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error('MenuContext should be provided');
    }
    return context;
};

const MenuProvider: React.FC = ({ children }) => {
    const menu = new MenuStore(new MenuService());
    return <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>;
};

export { useMenuContext, MenuProvider };
