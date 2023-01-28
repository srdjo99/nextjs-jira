import { Box, Button, TextField } from '@mui/material';

import { AddCircleOutlineOutlined, SaveOutlined } from '@mui/icons-material';

export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      <Button
        startIcon={<AddCircleOutlineOutlined />}
        fullWidth
        variant='outlined'
      >
        Add Task
      </Button>

      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        placeholder='New entry'
        autoFocus
        multiline
        label='New entry'
        helperText='Enter a value'
      />

      <Box display='flex' justifyContent='space-between'>
        <Button variant='text'>Cancel</Button>
        <Button variant='outlined' color='secondary' endIcon={<SaveOutlined />}>
          Save
        </Button>
      </Box>
    </Box>
  );
};
