import { EntriesState } from './';

type EntriesActionType = { type: '[Entries] - ActionName' };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
) => {
  switch (action.type) {
    default:
      return state;
  }
};
