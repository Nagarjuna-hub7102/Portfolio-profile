import React from 'react';
import themePattern from '../../Assets/theme_pattern.svg'
import serviceData from '../../Assets/services_data'
import arrowIcon from '../../Assets/arrow_icon.svg'
import './Services.css'


const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="service-title">
            <h1>My services</h1>
            <img src={themePattern} alt="" />
        </div>
        <div className="service-container">
            {serviceData.map((service,index)=>{
                return <div className="service-format" key={index}>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Readmore</p>
                        <img src={arrowIcon} alt="" />
                    </div>
                    
                </div>

            })}
        </div>
      
    </div>
  )
}

export default Services
