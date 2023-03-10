import React from 'react';
import './Sidebar.css'; 
import DashBoardimage from './Vector.png';
import Logo from './Logo.png';
import Icon1 from './icon1.png';
import Icon2 from './icon2.png';
import Icon3 from './icon3.png';
import Icon4 from './icon4.png';
import settingImg from './settings.png';
import helpimg from './help.png';
import logoutImg from './logout.png';


function Sidebar() {
  return (
    <div className="sidebar" style={{ backgroundColor: '#093B9E' }}>
      <div  style={{display: 'flex'}}>
        <img src={Logo} alt="DashBoardIcon"style={{marginBottom:'50px'}}/>
        
      </div>
      <div  style={{display: 'flex'}}>
        <img src={DashBoardimage} alt="DashBoardIcon"style={{marginBottom:'45px'}}/>
        
      </div>
      <div  style={{display: 'flex'}}>
        <img src={Icon1} alt="DashBoardIcon"style={{marginBottom:'45px'}}/>
        
      </div>
      <div  style={{display: 'flex'}}>
        <img src={Icon2} alt="DashBoardIcon"style={{marginBottom:'45px'}}/>
        
      </div>
      <div  style={{display: 'flex'}}>
        <img src={Icon3} alt="DashBoardIcon"style={{marginBottom:'45px'}}/>
        
      </div>
      <div  style={{display: 'flex'}}>
        <img src={Icon4} alt="DashBoardIcon"style={{marginBottom:'45px'}}/>
        
      </div>

      <hr className='divider'style={{marginBottom:'30px'}}/>
      <div  className='container'>
        <img src={settingImg} alt="DashBoardIcon"style={{marginBottom:'45px'}}/>
        
      </div>
      <div  className='container'>
        <img src={helpimg} alt="DashBoardIcon"style={{marginBottom:'45px'}}/>
        
      </div>
      <div  className='container'>
        <img src={logoutImg} alt="DashBoardIcon"style={{marginBottom:'45px'}}/>
        
      </div>
    </div>
  );
}

export default Sidebar;
