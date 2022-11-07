import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const FormSubmitted = ({ form, handleReset }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ fontSize: '20px' }}>
          Form submitted
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {form.map((item, index) => {
          return (
            <Typography key={`answer-${index.toString()}`}>
              {`${index + 1}. ${item.answer}`}
            </Typography>
          );
        })}
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleReset} variant="contained">
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormSubmitted;
