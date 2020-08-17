import {createContext} from 'react';

const PreferencesContext = createContext({
    tabBar: '',
    toggleTabBar: () => {},
});

export default PreferencesContext;