import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Proident dolor duis elit sunt qui dolor laborum veniam ea laboris quie consequat.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'Veniam in cupidatat adipisicing Lorem sunt est est ex cillum laboris fugiat officia fugiat.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: 'Commodo veniam alique tempor officia officia non laborum',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
