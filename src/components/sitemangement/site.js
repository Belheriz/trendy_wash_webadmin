import SearchField from "./searchfield";
import Table from "./siteTable";
import React, { useState } from "react";
import management from './management1.png';
import checkmark from './checkmark.png';
import "./modal.css";
import dashBoardimg from './dashboard.png';
import docImg from './documenticon.png';
import laundryImg from './laundryicon.png';
import qrCode from './qr-code.png';
import pencilImg from './pencil.png';
import redbin from './redbin.png';

function SiteManageMent(){
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    const toggleModal1 = () => {
        setModal(!modal1);
      };
    
      if(modal1) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
      setIsToggled(!isToggled);
    }
  
    return(
        <div>
            <h1 style={{ textAlign: 'left',color: '#22285E' }}>
                Site ManageMent
            </h1>
            <div>
              
                <SearchField/>
            </div>
            
            <div>
            <table className="my-table">
      <thead>
        <tr>
          <th >No.</th>
          <th >SiteId</th>
          <th >Name</th>
          <th >Image</th>
          <th >Mobile</th>
          <th >QrCode</th>
          <th >Manage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td> 
          <td>636caba997b41d387c6a2abf</td>
          <td>Trendy Wash at Taksin (Head Office)</td>
          <td><img src="https://backoffice.trendywash.net/api/v1/image/l4xMsHJbZuy9IhQ7" alt="Site 1" style={{ width: 150, height: 100 }}/></td>
          <td>
              <img src={checkmark} alt= 'checkmarkIcon'/>
           </td>
          <td>
            <a href="" target="_blank" rel="noreferrer">
               
               Download
           </a>
      </td>
          <td>
            <button className='my-button' onClick={toggleModal}  >  
            <img src={management} alt="My Button" />
            </button>
          </td>
        </tr>
        <tr>
        <td>2.</td>
          <td>636caba997b41d387c6a2abf</td>
          <td>Trendy Wash at Taksin (Head Office)</td>
          <td><img src="https://backoffice.trendywash.net/api/v1/image/l4xMsHJbZuy9IhQ7" alt="Site 1" style={{ width: 150, height: 100 }}/></td>
          <td>
              <img src={checkmark} alt= 'checkmarkIcon'/>
           </td>
          <td>
            <a href="" target="_blank" rel="noreferrer">
               
               Download
           </a>
      </td>
          <td><button className='my-button' ><img src={management} alt="My Button" /></button></td>
        </tr>
        <tr>
        <td>3.</td>
          <td>636caba997b41d387c6a2abf</td>
          <td>Trendy Wash at Taksin (Head Office)</td>
          <td><img src="https://backoffice.trendywash.net/api/v1/image/l4xMsHJbZuy9IhQ7" alt="Site 1" style={{ width: 150, height: 100 }}/></td>
          <td>
              <img src={checkmark} alt= 'checkmarkIcon'/>
           </td>
          <td>
            <a href="" target="_blank" rel="noreferrer">
               
               Download
           </a>
      </td>
          <td><button className='my-button' ><img src={management} alt="My Button" /></button></td>
        </tr>
        <tr>
        <td>4.</td>
          <td>636caba997b41d387c6a2abf</td>
          <td>Trendy Wash at Taksin (Head Office)</td>
          <td><img src="https://backoffice.trendywash.net/api/v1/image/l4xMsHJbZuy9IhQ7" alt="Site 1" style={{ width: 150, height: 100 }}/></td>
          <td>
              <img src={checkmark} alt= 'checkmarkIcon'/>
           </td>
          <td>
            <a href="" target="_blank" rel="noreferrer">
               
               Download
           </a>
      </td>
          <td><button className='my-button' ><img src={management} alt="My Button" /></button></td>
        </tr>
      </tbody>
    </table>
            </div>
     
            {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h1 style={{ color: "#22285E" }}>Manage</h1>
            <p style={{ color: "#0E4DA4" ,textAlign:'left' }}>
              info
            </p>
            <span>
                <div className="image-container">
                <img src={dashBoardimg}/>
                <img src={docImg}/>
                <img src={laundryImg}/>
                </div>
                <div className="container1" style={{ color: "#22285E",  }}>
                    <p className="element">dashboard</p>
                    <p className="element">report</p>
                    <p className="element">machine</p>
                </div>
            </span>
            <p style={{ color: "#0E4DA4" ,textAlign:'left' }}>
                Acion
            </p>
            <div className="button-container">
                <div className="button-row">
                    
                        <img src={qrCode} className="button-img" />
                    <div style={{ color: "#0E4DA4" ,marginRight:"50px"}}>
                        QR Code Generator
                    </div>
                   
                    <img src={pencilImg} className="button-img" />
                    <div style={{ color: "#0E4DA4" ,marginLeft:'30px'}}>Edit Site</div>
                </div>
                <div className="button-row">
                    <img src={docImg} className="button-img" />
                    <div style={{ color: "#0E4DA4" ,marginRight:"100px"}}>Up LoadSlip</div>
                    <img src={redbin} className="button-img" />
                    <div style={{ color: "#E81C00" }}>Delete Site</div>
                </div>
            </div>
            <p style={{ color: "#0E4DA4" ,textAlign:'left' }}>
                Other
            </p>
                <div className="container">
                    <div className="washer-text">Washer</div>
                        <div className="toggle-container">
                            <input
                                type="checkbox"
                                className="toggle"
                                checked={isToggled}
                                onChange={handleToggle}
                            />
                            <label htmlFor="toggle" className="label">
                         <div div className="ball"></div>
                    </label>
                    </div>
                 </div>
                 <div>
                    <label>
                        <input type="radio" name="size" value="S" />
                         <span style={{color:'#0E4DA4'}}>Size S</span> 
                        </label>
                    <label>
                        <input type="radio" name="size" value="M" />
                        <span style={{color:'#0E4DA4'}}>Size M</span> 
                    </label>
                     <label>
                        <input type="radio" name="size" value="L" />
                        <span style={{color:'#0E4DA4'}}>Size L</span> 
                     </label>
                </div>
                <button style={{backgroundColor: "#0E4DA4", marginLeft: "320px",border: 'none',color: 'white',borderRadius: '50px',width:"100px",height:"30px",}}>
                    Submit
                </button>

          </div>
        </div>
      )}
        </div>
        
        
    );
}

export default SiteManageMent;