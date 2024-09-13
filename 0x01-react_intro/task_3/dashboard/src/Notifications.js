import React from 'react';
import './Notifications.css';
import {getLatestNotification} from './utils';
import closeIcon from './close-icon.png';

function Notifications() {
	const handleCloseClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <>
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <button 
		onClick={handleCloseClick}
		aria-label='Close'
		style={{
          float: 'right',
          marginTop: '-70px',
          backgroundColor: '#fff',
          border: 'none',
        }} >
          <img src={closeIcon} alt='close' />
        </button>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent"
              dangerouslySetInnerHTML={{
                __html: getLatestNotification(),
              }}></li>
        </ul>
      </div>
    </>
  );
};

export default Notifications;
