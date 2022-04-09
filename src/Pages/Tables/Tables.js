import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/styles';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
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
}))
export default function BasicTable() {
    const classes= useStyles();
  return (
  <div className={classes.title}>
    <h2 className={classes.title}> Simple Table</h2>
    <p className={classes.title1}> Dashboard / Tables / Simple Table</p>
    <hr className={classes.line} ></hr>
    <TableContainer component={Paper} >
       <h4 className={classes.title2}>Simple Table </h4>
       <p className={classes.pp}> A simple example with no frills. </p>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}
