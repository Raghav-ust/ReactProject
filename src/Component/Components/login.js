import React from 'react';
import {
  Grid,
  TextField,
  Paper,
  Button
} from '@mui/material';
import "./register.css";

const LoginPage = () => {

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Username" required></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} required></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;
