import React from 'react';

const Project = ( {title, gitlink, description, img} ) => {
    return(
        <div className='projectWrapper'>
            <img src={img} className='ProjectImg'>
            </img>
            <h3 className='projectTitle'>
                {title}  -  <span><a target='_blank' href={gitlink} style={{color: 'rgb(15, 79, 255)'}}> Github </a></span>  
            </h3>
            <p className='projectDescription'>
                {description}
            </p>
        </div>
    )
}

export default Project;