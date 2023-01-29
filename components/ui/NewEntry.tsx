import { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import { AddCircleOutlineOutlined, SaveOutlined } from '@mui/icons-material';
import { EntriesContext } from '../../context/entries/EntriesContext';

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);

  const onTextFieldChanged = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);
    setIsAdding(false);
    setTouched(false);
    setInputValue('');
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='New entry'
            autoFocus
            multiline
            label='New entry'
            helperText={inputValue.length <= 0 && touched && 'Enter a value'}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChanged}
            onBlur={() => setTouched(true)}
          />

          <Box display='flex' justifyContent='space-between'>
            <Button variant='text' onClick={() => setIsAdding(false)}>
              Cancel
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveOutlined />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlineOutlined />}
          fullWidth
          variant='outlined'
          onClick={() => setIsAdding(true)}
        >
          Add Task
        </Button>
      )}
    </Box>
  );
};
