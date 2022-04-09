import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
const useStyles = makeStyles({
    root:{
        
        backgroundColor:'#fff',
        borderBottom:'0',
        boxShadow:'0 0 0 0 rgb(41 48 66 / 10%)', 
        marginLeft:'10px',
        
        
      },
      searchInput:{
        opacity:"0.5",
        padding:'1px 10px',
        fontSize:'0.9rem',
        '&:hover':{
          backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
          marginRight:'10px'
        }
      },
  
 
})
const drawerWidth = 240;
function Headers({funcSetIsMobile}) {
  const classes = useStyles();
  
  return (
    <AppBar position='fixed' className={classes.root}>
      <Toolbar >
        <Grid container alignItems='center'>
          <Grid item >
            <IconButton onClick={funcSetIsMobile}>
              <MenuIcon/>
            </IconButton>
            <InputBase
            placeholder='Search topics'
            className={classes.searchInput}
            startAdornment={<SearchIcon />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
              <IconButton >
                 <Badge badgeContent={4} color ="Primary">
                    <ChatBubbleOutlineIcon />
                 </Badge>
              </IconButton>
              <IconButton>
               <Badge badgeContent={7} color ="Primary">     
                <NotificationsNoneOutlinedIcon/>
               </Badge>
              </IconButton>
              <IconButton>
                <Avatar sx={{ width: 26, height: 26 }}>A</Avatar>
              </IconButton>
              
              <IconButton>
              <PowerSettingsNewIcon/>
              </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Headers