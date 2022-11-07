import { TextField, Typography, Box } from '@mui/material';
import React from 'react';

const AnswerField = ({ question, index, handleTaskInput }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ marginRight: '10px' }}>{index + 1}.</Typography>
      <TextField
        fullWidth
        placeholder={question.question}
        onChange={(e) => handleTaskInput(e, index)}
      />
    </Box>
  );
};

export default AnswerField;
