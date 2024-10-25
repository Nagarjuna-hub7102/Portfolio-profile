import React from 'react'
import './MyWork.css'
import themePattern from '../../Assets/theme_pattern.svg'
import workData from '../../Assets/mywork_data'
import arrowIcon from '../../Assets/arrow_icon.svg'

const My_work = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My work</h1>
            <img src={themePattern} alt="" />
        </div>
        <div className="mywork-container">
           { workData.map((work,index) =>{
            return <><div className='project_name'><a href={work.w_link}><img src={work.w_img} alt=""  /></a>
            <p>{work.w_name}</p>
            </div>
            </>
            
            
           })}

        </div>
        <div className="mywork-showmore">
                        <p>Show more</p>
                        <img src={arrowIcon} alt="" />
                    </div>
      
    </div>
  )
}

export default My_work
