import React,{ useState } from 'react';
import './Table.css';
import management from './management1.png';
import checkmark from './checkmark.png';


function Table(props) {
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
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
            <button className='my-button' onClick={handleOpenModal}>  
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
  );
}

export default Table;
