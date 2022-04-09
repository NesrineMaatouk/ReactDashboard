import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Sidebar from '../../componements/Sidebar/Sidebar'
import Headers from '../../componements/Headers/headers'
const useStyles = makeStyles(theme=>({
  root:{
    display:'flex',
    
    
}, 
  head :{
    paddingLeft:'260px',

  },
  page:{
        background:'#F7F9FC',
        width:'100%',
        boxSizing: 'border-box',
        color:'#000',
        direction:' ltr',
        padding: '5rem 2.5rem 1.5rem',
        flex:' 1 1 0%' ,
        fontsize: '1.5rem',
        fontWeight: '600'    

    }
}))
export default function Layout({children}) {
  const classes= useStyles();
  
    return (
      
    <div className={classes.root}>
       
          
      
        <div  >
          {<Sidebar/>}
        </div>
       <div className={classes.page}>
        {children}
        </div>    
    </div>
  )
}
