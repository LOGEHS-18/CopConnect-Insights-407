import React from 'react';
import { Grid } from '@mui/material';

const Main = ({ title, imageTags }) => {
  return (
    <Grid
    item
    xs={12}
    md={8}
    sx={{
      '& .markdown': {
        py: 3,
      },
    }}
  > 
      <h2>{title}</h2>
      {imageTags.map((tag, index) => (
        <img key={index} src={tag.image} alt={`Ima ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
      ))}
    </Grid>
  );
};

export default Main;