import React from 'react';
import PDF from './Images/NicholasKnapton.pdf'

const NavBar = () => {
    return(
        <div className='NavBar'>
            <div className='NavLinks'>
                <a href='#projectsPage'><h1>Projects</h1></a>
                <a href='#technologysPage'><h1>Technologys</h1></a>
                <a href='#aboutPage'><h1>About</h1></a>
            </div>
            <div className='NavLogo' id='NavLogo'>
                <a href='#introPage'><h4>Nicholas Knapton</h4></a>
            </div>
            <div className='NavResume'>
                <a target='_blank' href={PDF}><h1>Resume</h1></a>
            </div>
        </div>
    )
}

export default NavBar;