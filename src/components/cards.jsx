import React from 'react'
import stack from "./images/stack.jpg"


const Content = ({title,date,loc,para,map,calendar}) => {
  return (
    <div className='cards-content'>
          <img src={stack} alt="poster" className='cards-img' />
        <div className="events-detail">
            <div className="events-title">
                <h2>{title}</h2>
          </div>
              <div className="events-date">
                <img src={calendar} alt="" />
                {date}
          </div>
          <div className="events-location">
            <img src={map} alt="" />
            {loc}
              </div>
          <div className="events-desc">
            <p>{para}</p>
          </div>

        </div>
    </div>
  )
}

export default Content
