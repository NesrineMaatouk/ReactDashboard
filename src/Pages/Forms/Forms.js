import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles(theme=>({
    title:{
      
      fontSize:'1.5rem',
      fontWeight:'600',
  },
  title1:{
    fontSize:'13px',
    fontWeight:'400',
    marginTop:'8px'

  },
  line:{
      marginTop:'24px',
      marginBottom:'24px',
      borderColor:'rgba(0,0,0,0.12)',
      borderBottomWidth :'0',
  },
  title2:{
      padding:'16px',
      paddingBottom:'4px',
      fontSize:'1rem',
      fontWeight:'500',
  },
  pp:{
    marginLeft:'15px',
    fontSize:'0.8rem',
    fontWeight:'400',
  },
  card:{
    background:'#fff'
  },
 
}))

export default function FormPropsTextFields() {
    const classes= useStyles();
  return (
      <div>
           <h2 className={classes.title}> Formik </h2>
           <p className={classes.title1}> Dashboard / Forms / Formik</p>
           <hr className={classes.line} ></hr>
           <div className={classes.card}> 
             <h4 className={classes.title2}>Formik  </h4>
             <p className={classes.pp}>Formik example with Yup validation. </p>
     
             <Box
             component="form"
             sx={{
             '& .MuiTextField-root': { m: 2, width: '53.5ch' },
             }}
             noValidate
             autoComplete="off"
            >
            <div>
              <TextField
               required
               id="outlined-required"
               label="Required"
               defaultValue="Hello World"
             />
             <TextField
               disabled
               id="outlined-disabled"
               label="Disabled"
               defaultValue="Hello World"
             />
           </div>
           <FormControl  sx={{ m: 2, width: '111ch'}}>
             <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
             <OutlinedInput
               id="outlined-adornment-amount"
               startAdornment={<InputAdornment position="start">$</InputAdornment>}
               label="Amount"
              />
           </FormControl>
           <FormControl  sx={{ m: 2, width: '111ch'}}>
             <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
             <OutlinedInput
               id="outlined-adornment-amount"
               startAdornment={<InputAdornment position="start">$</InputAdornment>}
               label="Amount"
              />
           </FormControl>
           <FormControl  sx={{ m: 2, width: '111ch'}}>
             <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
             <OutlinedInput
               id="outlined-adornment-amount"
               startAdornment={<InputAdornment position="start">$</InputAdornment>}
               label="Amount"
              />
           </FormControl>
          </Box>
          
             <Button   variant="contained">Save changes</Button>
         
         </div>
      </div>
  );
}
