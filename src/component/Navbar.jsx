import React from 'react'
import { Link } from 'react-router-dom'
import logo from"../images/logo.png"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function Navbar() {
  return <>



<Sidebar style={{height:'100vh', width:"10px" , backgroundColor:"black"}}>
  <div>

  <img src={logo} alt="" height={40} width={90} /> <span className='text-success fs-3'>FILIPKART</span>
  </div>
  <Menu>
    <SubMenu label="sideBar">

 
      <MenuItem><Link className="nav-link active" to="/">Home</Link> </MenuItem>
      {/* <MenuItem> Line charts </MenuItem> */}
    </SubMenu>
   
  </Menu>
</Sidebar>;
  
  </>
}

export default Navbar