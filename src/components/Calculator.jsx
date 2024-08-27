import React, { useState } from 'react';
import { Container, Grid, Button, TextField, Typography } from '@mui/material';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); 
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <Container maxWidth="xs" sx={{backgroundColor:'aliceblue'}}>
      <Typography variant="h2" align="center" gutterBottom> Calculator </Typography>
      <TextField fullWidth variant="outlined"margin="normal" value={input}  
      InputProps={{
          readOnly: true,
        }} />
      <TextField fullWidth variant="outlined" margin="normal" sx={{border:'2%solidblack'}} value={result} 
      InputProps={{
          readOnly: true,
        }} />
      <Grid container spacing={2}>
              {['7', '8', '9', '/'].map((value) => (
     <Grid item xs={3} key={value}>
      <Button fullWidth variant="contained" sx={{backgroundColor:'gray',color:'black',fontSize:'25px'}}onClick={() => handleClick(value)}> {value}
     </Button> </Grid> ))}
        
              {['4', '5', '6', '*'].map((value) => (
      <Grid item xs={3} key={value}>
      <Button fullWidth variant="contained"  sx={{backgroundColor:'gray', color:'black',fontSize:'25px'}}onClick={() => handleClick(value)}> {value}
     </Button> </Grid> ))}
       
     {['1', '2', '3', '-'].map((value) => (
      <Grid item xs={3} key={value}>
      <Button fullWidth variant="contained" sx={{backgroundColor:'gray', color:'black',fontSize:'25px'}} onClick={() => handleClick(value)}> {value}
      </Button> </Grid> ))}
       
        {['0', '.', '=', '+'].map((value) => (
         <Grid item xs={3} key={value}>
        <Button fullWidth variant="contained" sx={{backgroundColor:'gray', color:'black', fontSize:'25px'}} onClick={() => (value === '=' ? handleCalculate() : handleClick(value))}
        > {value}
        </Button> </Grid>  ))}
        
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="success" sx={{ fontSize:'25px'}} onClick={handleClear} > Clear </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculator;
