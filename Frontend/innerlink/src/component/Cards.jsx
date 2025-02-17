import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import "../styles/Cards.css"
function Cards(props) {
  let randomRotation=(Math.random() * 10 - 8);
  return (
    <>
        <div className="card" style={{transform:`rotate(${randomRotation}deg)`}}>
            <div className='card-items'></div>
        <div className="icon">
            {/* <CancelIcon sx={{color:"green",fontSize:"10vh",cursor:"pointer",position:"relative",left:"19vh",padding:"10px"}}/> */}
            {props.icon}
        </div>
        <div className="container-content">
            <h3 className="card-content">
               {props.content}
            </h3>
        </div>
        </div>
    
    </>
  )
}

export default Cards
