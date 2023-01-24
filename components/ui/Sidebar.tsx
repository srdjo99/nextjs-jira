import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { InboxOutlined, MailOutlined } from '@mui/icons-material';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
  return (
    <Drawer anchor='left' open={false} onClose={() => console.log('cerrando')}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h4'>Menu</Typography>
        </Box>

        <List>
          {menuItems.map((text, index) => (
            <ListItemButton key={text}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlined /> : <MailOutlined />}
              </ListItemIcon>
              <ListItemText>{text}</ListItemText>
            </ListItemButton>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
