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
        'Pending: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris quie consequat.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'In-Progress: Veniam in cupidatat adipisicing Lorem sunt est est ex cillum laboris fugiat officia fugiat.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        'Finished: Commodo veniam alique tempor officia officia non laborum',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    };

    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
  };

  return (
    <EntriesContext.Provider value={{ 
      ...state,
        // methods
        addNewEntry,
      }}>
      {children}
    </EntriesContext.Provider>
  );
};
