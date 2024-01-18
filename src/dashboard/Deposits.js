import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Solved Case</Title>
      <Typography component="p" variant="h4">
        Crimal Case
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 16 March, 2021
      </Typography>
    </React.Fragment>
  );
}
