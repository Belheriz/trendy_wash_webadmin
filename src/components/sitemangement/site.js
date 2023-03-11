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
import { TextField, Box,Checkbox, FormControlLabel } from "@material-ui/core";
import Addimage from './addImage.png';

const stylesTextfield = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
  },
  textField: {
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '2px',
      height: '100%',
      backgroundColor: 'black',
    },
  },
};

;


function SiteManageMent(){
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);

    const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    const toggleModal1 = () => {
        setModal1(!modal1);
      };
    
      if(modal1) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

    const [isToggled, setIsToggled] = useState(false);
    const [isToggled1, setIsToggled1] = useState(false);
  

    const handleToggle = () => {
      setIsToggled(!isToggled);
    }

    
    const handleToggle1 = () => {
      setIsToggled1(!isToggled1);
    }

    const [isFocused, setIsFocused] = useState(false);

  const inputStyle = {
    width:"500px",
    padding: "10px",
    backgroundColor: "white",
    top:"20px",
    underline: 'none',
    height:"20px"
  };

  const containerStyle = {
    position: "relative",
    border: "2px solid #D7D9DA",
    borderRadius: "5px",
    p: 2,
    height:"50px",
    margin:"20px"
  };

  const containerStyle1 = {
    position: "relative",
    border: "2px solid #D7D9DA",
    borderRadius: "5px",
    p: 2,
    height:"50px",
    width:"160px",
    margin:"5px"
  };

  const containerStyle2 = {
    position: "relative",
    border: "2px solid #D7D9DA",
    borderRadius: "5px",
    p: 2,
    height:"50px",
    width:"100px",
    margin:"5px"
  };

  const containerStyle3 = {
    position: "relative",
    border: "2px solid #D7D9DA",
    borderRadius: "5px",
    p: 2,
    height:"50px",
    width:"300px",
    margin:"5px"
  };

  const containerStyle4 = {
    position: "relative",
    border: "2px solid #D7D9DA",
    borderRadius: "5px",
    p: 2,
    height:"100px",
    width:"300px",
    margin:"5px"
  };

  const containerStyle5 = {
    position: "relative",
    border: "2px solid #D7D9DA",
    borderRadius: "5px",
    p: 2,
    height:"80px",
    width:"120px",
    margin:"5px"
  };

  const inputStyle1 = {
    width:"120px",
    padding: "10px",
    backgroundColor: "white",
    top:"20px",
    underline: 'none',
    height:"20px"
  };

  const inputStyle2 = {
    width:"80px",
    padding: "10px",
    backgroundColor: "white",
    top:"20px",
    underline: 'none',
    height:"20px"
  };
  const inputStyle3 = {
    width:"250px",
    padding: "10px",
    backgroundColor: "white",
    top:"20px",
    underline: 'none',
    height:"20px"
  };

  const inputStyle4 = {
    width:"100px",
    padding: "10px",
    backgroundColor: "white",
    top:"20px",
    underline: 'none',
    height:"20px"
  };
  const topicStyle = {
    position: "absolute",
    top: "-10px",
    left: "10px",
    backgroundColor: "white",
    color: "#263238",
    padding: "0 5px",
    fontWeight: "bold",
    fontSize:"14px"
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    if (event.target.value.trim().length > 0) {
      setIsFocused(true);
    }
  };

  
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
                <button style={{backgroundColor: "#0E4DA4", marginLeft: "320px",border: 'none',color: 'white',borderRadius: '50px',width:"100px",height:"30px",}} onClick={toggleModal1} >
                    Submit
                </button>

          </div> 
        </div>
      )}

{modal1 && (
        <div className="modal">
          <div onClick={toggleModal1} className="overlay"></div>
          <div className="modal-content">
            <h1 style={{ color: "#22285E" }}>Edit site</h1>
            <p style={{display:"flex"}}>
            <div style={{display: "flex", marginRight:"200px"}}>
                    <div className="washer-text">สถานะ</div>
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
                 <button style={{border:"none",marginLeft:"50px",}} >
                  <img src={Addimage} alt="My Button" />
                  </button>
                  <div style={{color:"#95D5B6",fontSize:"16px"}}>
                    <div>
                    (.JPGE , JPG , PNG)
                    40*40 px
                    </div>
                  </div>
                  
            </p>
            <span>
              <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={containerStyle}
    >
      <Box mb={1} style={topicStyle}>
        ชื่อสาขา ภาษาไทย
      </Box>
      <TextField
           InputProps={{
            style: inputStyle,         
            underline: 'none'
          }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Box>
    
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={containerStyle}
    >
      <Box mb={1} style={topicStyle}>
        SiteName
      </Box>
      <TextField
           InputProps={{
            style: inputStyle,         
            underline: 'none'
          }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Box>
    <div style={{display:"flex"}}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={containerStyle1}
    >
      <Box mb={1} style={topicStyle}>
        ประเภทสาขา
      </Box>
      <TextField
           InputProps={{
            style: inputStyle1,         
            underline: 'none'
          }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={containerStyle1}
    >
      <Box mb={1} style={topicStyle}>
        สาขาย่อย
      </Box>
      <TextField
           InputProps={{
            style: inputStyle1,         
            underline: 'none'
          }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={containerStyle2}
    >
      <Box mb={1} style={topicStyle}>
        กลุ่มสาขา
      </Box>
      <TextField
           InputProps={{
            style: inputStyle2,         
            underline: 'none'
          }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={containerStyle2}
    >
      <Box mb={1} style={topicStyle}>
        จำนวนยูนิต
      </Box>
      <TextField
           InputProps={{
            style: inputStyle2,         
            underline: 'none'
          }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Box>
    </div>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={containerStyle}
    >
      <Box mb={1} style={topicStyle}>
        ผู้ดูแลสถานที่
      </Box>
      <TextField
           InputProps={{
            style: inputStyle,         
            underline: 'none'
          }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Box>
    <div style={{display:"flex",margin:"20px"}}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={containerStyle3}
    >
      <Box mb={1} style={topicStyle}>
        การเก็บค่าเช่า
      </Box>
      <div style={{display:"flex",marginLeft:"20px"}}>
      <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      }
      label={
        <span style={{ color: checked ? "#263238" : "#263238" }}>
          {`${checked ? "%" : "%"}`}
        </span>
      }
    />
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      }
      label={
        <span style={{ color: checked ? "#263238" : "#263238" }}>
          {`${checked ? "THB" : "THB"}`}
        </span>
      }
    />
    
      </div>
       
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={containerStyle3}
    >
      <Box mb={1} style={topicStyle}>
        จำนวน
      </Box>
      <TextField
           InputProps={{
            style: inputStyle3,         
            underline: 'none'
          }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Box>
    </div>
    <div style={{display:"flex"}}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={containerStyle3}
    >
      <Box mb={1} style={topicStyle}>
        จังหวัด
      </Box>
      <TextField
           InputProps={{
            style: inputStyle3,         
            underline: 'none'
          }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={containerStyle3}
    >
      <Box mb={1} style={topicStyle}>
        เขตพื้นที่
      </Box>
      <TextField
           InputProps={{
            style: inputStyle3,         
            underline: 'none'
          }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Box>
    </div>
    <div style={{display:"flex",margin:"20px"}}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={containerStyle4}
    >
      <Box mb={1} style={topicStyle}>
        การเก็บค่าเช่า
      </Box>
      <Box display="flex" flexDirection="row" alignItems="start">
        
        <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      }
      label={
        <span style={{ color: checked ? "#263238" : "#263238" }}>
          {`${checked ? "THB" : "THB"}`}
        </span>
      }
      style={{ display:"block"}}
    />
    <Box mr={2} ml={2} borderLeft={1} borderColor="#bdbdbd" height={24}></Box>
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      }
      label={
        <span style={{ color: checked ? "#263238" : "#263238" }}>
          {`${checked ? "Per Unit" : "Per Unit"}`}
        </span>
      }
      style={{ display:"block"}}
    />
       
      <Box mr={10}>
      <Box
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    justifyContent="flex-start"
    style={containerStyle5}
  >
    <Box mb={1} style={topicStyle}>
      จำนวน
    </Box>
    <TextField
         InputProps={{
          style: inputStyle4,         
          underline: 'none'
        }}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  </Box>
  </Box>
    
    
      </Box>
       
    </Box>
    
    </div>
            </span>
            
               
          </div> 
        </div>
      )}
        </div>
        
        
    );
}

export default SiteManageMent;