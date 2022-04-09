import React from "react";
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
export const SidebarData =[
    {
        titles:'Dashboard',
        path:'/',
        icons:<TuneIcon />,
        iconClosed:<KeyboardArrowDownIcon/>,
        iconOpened:<KeyboardArrowUpIcon/>,
        subNav:[
            {
                titles:'Default',
                path:'/Default',
                

            },
            {
                titles:'Analytics',
                path:'/Analytics',
                

            },
            {
                titles:'SaaS',
                path:'/SaaS',
               
            },
        ]
    },
    {
        titles:'Pages',
        path:'/employees',
        icons:<ArticleOutlinedIcon/>,
        iconClosed:<KeyboardArrowDownIcon/>,
        iconOpened:<KeyboardArrowUpIcon/>,
        subNav:[
            {
                titles:'Profile',
                path:'/Pages/Profile',
               
            },
            {
                titles:'Settings',
                path:'/Pages/Settings',
               
            },
        ]
        
    }
    ,{
        titles:'Projects',
        path:'/Table',
        icons:<WorkOutlineIcon/>,
        iconClosed:<KeyboardArrowDownIcon/>,
        iconOpened:<KeyboardArrowUpIcon/>,
                
    },
    {
        titles:'Orders',
        path:'/Table',
        icons:<ShoppingCartOutlinedIcon/>,
        iconClosed:<KeyboardArrowDownIcon/>,
        iconOpened:<KeyboardArrowUpIcon/>,
                
    },
    {
        titles:'Invoices',
        path:'/employees',
        icons:<CreditCardOutlinedIcon/>,
        iconClosed:<KeyboardArrowDownIcon/>,
        iconOpened:<KeyboardArrowUpIcon/>,
        subNav:[
            {
                titles:'List',
                path:'/Pages/Profile',
               
            },
            {
                titles:'Detail',
                path:'/Pages/Settings',
               
            },
        ]
        
    }
    ,{
        titles:'Tasks',
        path:'/Tasks',
        icons:<TaskAltIcon/>,
        iconClosed:<KeyboardArrowDownIcon/>,
        iconOpened:<KeyboardArrowUpIcon/>,
                
    }
    
    ,{
        titles:'Calender',
        path:'/Calender',
        icons:<CalendarTodayIcon/>,
        iconClosed:<KeyboardArrowDownIcon/>,
        iconOpened:<KeyboardArrowUpIcon/>,
                
    }
    ,{
        titles:'Auth',
        path:'/employees',
        icons:<GroupOutlinedIcon/>,
        iconClosed:<KeyboardArrowDownIcon/>,
        iconOpened:<KeyboardArrowUpIcon/>,
        subNav:[
            {
                titles:'List',
                path:'/Pages/Profile',
               
            },
            {
                titles:'Detail',
                path:'/Pages/Settings',
               
            },
        ]
        
    }
    ,{
        titles:'Table',
        path:'/Table',
        icons:<FormatListBulletedIcon/>,
        iconClosed:<KeyboardArrowDownIcon/>,
        iconOpened:<KeyboardArrowUpIcon/>,
                
    }
    ,{
        titles:'Forms',
        path:'/Forms',
        icons:<CheckBoxOutlinedIcon/>,
        iconClosed:<KeyboardArrowDownIcon/>,
        iconOpened:<KeyboardArrowUpIcon/>,
                
    }
]