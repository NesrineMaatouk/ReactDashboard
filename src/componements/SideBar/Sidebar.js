import React ,{useState} from 'react'
import  styled from 'styled-components'
import {SidebarData} from './SidebarData'
import SubMenu from './SidebarMenu'
const SidebarLogo =styled.div`

`
const Logoname =styled.div`
   color:#fff;
   min-height: 35px;
   align-items:center;
   padding:18px 105px ;
   font-weight:500;
   font-size:1.1rem;
`
/*
const Nav = styled.nav`
padding-left: 260px;
`
const SidebarNav= styled.nav`
    
    height:100vh;
    display:flex;
    justify-content:center;
    position:fixed;
    top:10;
    
    left:${({sidebar})  => (sidebar ? '0':'-100%')  };
    transition:350ms;
    z-index:5;
`;*/
const SidebarWarp = styled.div`
   width:100%;
   background:#233044;
   width:258px;
   height:100vh;
   justify-content:center;
   `;
const SidebaeWrite = styled.div`
   color:#eeeeee;
   font-size:0.72rem;
   font-weight:500;
   text-transform:uppercase;
   padding: 16px 28px 4px;
   opacity: 0.4;
   line-height: 1.57;
   display: block;
   font-family: Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
`

const Sidebar = () => {
  const [sidebar,setSidebar]= useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
       
        
        <SidebarWarp>
          <SidebarLogo>
           <Logoname >Mira</Logoname>
          </SidebarLogo>
         <SidebaeWrite>
           Pages
         </SidebaeWrite>
          {SidebarData.map((item,index)=>{
            return <SubMenu item={item} key={index}/>

          })}
          
        </SidebarWarp>
      
     
    </div>
  )
}

export default Sidebar;