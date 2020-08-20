import {createContext} from 'react';

const PreferencesContext = createContext({
    tabbarT: '',
    toggleTabBar: () => {},
});

export default PreferencesContext;