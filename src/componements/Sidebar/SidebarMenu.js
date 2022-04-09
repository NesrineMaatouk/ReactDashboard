import React ,{useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
    display:flex;
    color:#e1e6fc;
    justify-content:space-between;
    align-item:center;
    padding:18px;
    padding-left:30px;
    list-style:none;
    height:10px;
    text-decoration:none;
    font-size: 13px;
    align-items:center;
    
    font-weight: 400;
    line-height: 1.5;
    &:hover{
        background:#1e293a;
        cursor:pointer;   
    }
`;
const SidebarLabel = styled.span`
    padding: 0 16px ;
    
`
const DropdownLink = styled(Link)`
     height:30px;
     padding-left:3rem;
     display:flex;
     align-items:center;
     text-decoration:none;
     color:#fff;
     font-size: 13px;
     
    &:hover{
        background:#252831;
        cursor:pointer;   
    }
`
const SidebarIcon = styled(Link)`
     color:#fff;
     opacity: 0.4;
`

const SubMenu = ({item})=>{
  const [subnav, setSubnav] = useState(false);  
  const showSubnav = () => setSubnav(!subnav);
    return(
        <div>
           <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
           <div>
             <SidebarIcon>{item.icons}</SidebarIcon>
             <SidebarLabel>{item.titles}</SidebarLabel>
           </div>
           <div>
              {item.subNav && subnav 
              ? item.iconOpened
              :item.subNav 
              ? item.iconClosed
              :null }
           </div>
           </SidebarLink> 
           {subnav && item.subNav.map((item,index) => {
              return (
                 <DropdownLink to={item.path} key={index}>
                    {item.icons}
                    <SidebarLabel>{item.titles}</SidebarLabel>                
                 </DropdownLink>

              )
           })}
        </div>    
    )
}
export default SubMenu;