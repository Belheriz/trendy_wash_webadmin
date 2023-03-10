import React from 'react';
import dashBoardimg from './dashboard.png';
import docImg from './documenticon.png';
import laundryImg from './laundryicon.png';

const Modal = ({ open ,onClose}) => {
    if(!open) return null
  return (
    <div className='overlay' onClick={onClose}>
        <div className='modalContainer'>
            <h1>
                Manage
            </h1>
            <div>
                <p>info</p>
                <div class="report-container">
                    <div class="report-icon">
                        <img src={dashBoardimg}/>
                    </div>
                    <div class="report-text">
                    Report
                    </div>
                    <div class="report-icon">
                        <img src={docImg}/>
                    </div>
                    <div class="report-text">
                    Report
                    </div><div class="report-icon">
                        <img src={laundryImg}/>
                    </div>
                    <div class="report-text">
                    Report
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  );
};

export default Modal;