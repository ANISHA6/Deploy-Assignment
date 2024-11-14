
import React from 'react';
// import './style.css';


const AssignmentCard = () => {
  return (
    <div style={containerStyle}>
      <div style={gridOverlayStyle}></div>
      <div style={tagStyle}>Assignment</div>
      <h1 style={titleStyle}>UI DEVELOPER</h1>
      <h2 style={titleStyle}>ASSIGNMENT</h2>
      <div style={companyStyle}>COMPANY<br /> <span style={{ color: '#e0e0e0' }}>Juspay Technologies Private Limited</span></div>
    </div>
  );
};


const containerStyle = {
  width: '40%',
  maxWidth: '600px',
  background: 'linear-gradient(145deg, #121212, #1a1a1a)',
  padding: '30px 50px',
  borderRadius: '8px',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
  color: '#ffffff',
  zIndex: 1,
   
  backgroundImage: 
    'radial-gradient(50% 60% at top center, rgba(18, 230, 200, 0.4), transparent 40%),' + 
    'radial-gradient(50% 80% at  80% 100%, rgba(162, 135, 244, 0.4), transparent 40%)',  
};

const gridOverlayStyle = {
  position: 'absolute',
  top: '70px',
  left: '45px',
  width: '27%',
  height: '43%',
  backgroundImage:
    'linear-gradient(to right, rgba(255, 255, 255, 0.09) 2px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.09) 2px, transparent 1px)',
  backgroundSize: '40px 40px',
  zIndex: -1,
  bottom:'40px'
};

const tagStyle = {
  display: 'inline-block',
  backgroundColor: '#FFBB37',
  color: '#000',
  padding: '8px 30px',
  borderRadius: '8px',
  fontSize: '14px',
  margin: '35px 0px',
  textTransform: 'uppercase',
  zIndex: 2,
  position: 'relative',
  borderBottom:"5px gray solid",
  borderRight:"5px gray solid",
};

const titleStyle = {
  fontSize: '2.5em',
  lineHeight: 1.2,
  marginBottom: '10px',
  zIndex: 2,
  position: 'relative',
  margin: '0',
  padding: '0', 
  width:'230%',
  letterSpacing: '0.01em',
};



const companyStyle = {
  fontSize: '0.9em',
  color: '#b3b3b3',
  zIndex: 2,
  position: 'relative',
  lineHeight: 1.6,
  margin: '30px 0px',

};

export default AssignmentCard;
