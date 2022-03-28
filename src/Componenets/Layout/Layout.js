import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme=>({
    page:{
        background:'#f9f9f9',
        width:'100%'
        

    }
}))
export default function Layout({children}) {
  const classes= useStyles()
    return (
    <div>
        { /*App bar */}
        {/*side drawer */}
        <div className={classes.page}>
        {children}
        </div>    
    </div>
  )
}
