import { createContext } from 'react';

interface ContextProps {
  sidemenuOpen: boolean;

  // Functions
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
