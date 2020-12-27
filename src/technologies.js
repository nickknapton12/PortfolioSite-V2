import React from 'react';

import CPP from './Images/C++icon.png';
import Cicon from './Images/Cicon.webp';
import Java from './Images/JavaIcon.jpg';
import JScript from './Images/JScriptIcon.png';
import ReactIcon from './Images/Reacticon.png';
import CSS from './Images/CSSIcon.png';

const Technologys = () => {
    return(
        <div className='technologysPage' id='technologysPage'>
            <h2 className='TechHeader'>Some Technologys I have Worked with</h2>
        <div className='techWrapper'>
            <img className='Icon' src={CPP}></img>
            <img className='Icon' src={Cicon}></img>
            <img className='Icon' src={Java}></img>
            <img className='Icon' src={JScript}></img>
            <img className='Icon' src={ReactIcon}></img>
            <img className='Icon' src={CSS}></img>
        </div>
        </div>
    )
}

export default Technologys;