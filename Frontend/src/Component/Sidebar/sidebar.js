import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  {SidebarData}  from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';







function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
 
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='nav-menu'>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
                if(item.cName==='nav-title'){
                    return(
                <div  className='title' >
                <React.Fragment key={index}>
                <li  className={item.cName}>
                  <Link to={item.path} >
                   {item.title}
                   {item.icon}
                  </Link>
                </li>
                </React.Fragment>
                </div>
                    )
                }else{
            
              return (
                
                <React.Fragment key={index}>
                <li  className={item.cName}>
            
                  <Link to={item.path} >
                  <span>  {item.icon}
                    {item.title}</span>
                  </Link>
                </li>
                </React.Fragment>
              );
            }})}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;