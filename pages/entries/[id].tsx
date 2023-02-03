import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Button,
} from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

import { Layout } from '../../components/layouts';

const EntryPage = () => {
  return (
    <Layout title='... .... ...'>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title='Entry' subheader={`Created: 30 mins ago`} />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder='New entry'
                autoFocus
                multiline
                label='New entry'
              />
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant='contained'
                fullWidth
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default EntryPage;
