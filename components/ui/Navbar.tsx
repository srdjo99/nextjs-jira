import { FC, useContext } from 'react';
import NextLink from 'next/link';
import { AppBar, Toolbar, IconButton, Typography, Link } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

import { UIContext } from '../../context/ui';

export const Navbar: FC = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuOutlined />
        </IconButton>
        <NextLink href='/' passHref>
          <Link underline='none' color='white'>
            <Typography variant='h6'>OpenJira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
