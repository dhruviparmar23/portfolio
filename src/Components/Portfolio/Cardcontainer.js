import React from 'react';
import './Cardcontainer.css';


const Cardcontainer = ({ image, title, link, button }) => {


  return (
    <div className="card-container">

      <div className='card'>
        <img src={image} />
      </div>
      <div className='overlay'>
      <div className='details'>
          <p>{title}</p>
          <a href={link} target='_blank'>
            <button className='btn1'>{button}</button>
          </a>
        </div>
      </div>
    </div>
  )
}


export default Cardcontainer