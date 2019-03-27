import React from 'react';


const ToggleButton = props => (
    <button className="toggle-botton" onClick={props.click}
         style={{
            height:'30px',
            background:'transparent',
            display:'flex',
            alignItems:'flex-start',
            flexDirection:'column',
            justifyContent:'space-around',
            outline:'none',
            border:'none',
            color:'white'
        }}>
        <div className="bar" 
        style={{
            width: '15px',
            height:'3px',
            background:'white',
       
        }}
        >
        </div>
        <div className="bar" 
        style={{
            width: '30px',
            height:'3px',
            background:'white',
       
        }}
        >
        </div>
        <div className="bar" 
        style={{
            width: '25px',
            height:'3px',
            background:'white',
       
        }}
        >
        </div>
    </button>
);

export default ToggleButton;