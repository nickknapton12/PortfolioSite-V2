import React from 'react';
import PDF from './Images/NicholasKnapton.pdf';
import ProfilePic from './Images/Headshot.jpg';
import githubPic from './Images/githubimg.JPG';
import linkedinPic from './Images/LinkedinPic.JPG';

const About = () =>{
    return(
        <div className='aboutPage' id='aboutPage'>
            <h2 className='aboutHeader'>About Me!</h2>
            <div className='window'>
                <div className='NavBar2Wrapper'>
                    <div className='dots'>
                        <div className='dot1'></div>
                        <div className='dot2'></div>
                        <div className='dot3'></div>
                    </div>
                    <h2 className='contactbutton'>
                       <a target='_blank' href={PDF} style={{color:'white'}}>Contact</a>
                    </h2>
                </div>
                <div className='profileWrapper'>
                    <div className='aboutSide'>
                        <img className='profilePic' src={ProfilePic}></img>
                        <p className='profileText'>Hey! Im currently a student at the <strong>University of Calgary</strong>, studying Software Engineering and taking
                            a minor in Biomedical Engineering. I have a passion for learning new technologies,
                            and excell in group and solo settings. <br></br> I was raised in Whistler BC, and enjoy Mountain Biking in my free time.
                            <br></br> If you have made it this far feel free to contact me whenever! Currently I am looking for <strong>2021 Summer Internships</strong> as I am still in
                            university, however I am open to other oportunities.
                        </p>
                    </div>
                    <div className='socialLinksSide'>
                        <a target='_blank' href='https://github.com/nickknapton12'> <img className='GithubPic' src={githubPic}></img></a>
                        <a target='_blank' href='https://www.linkedin.com/in/nicholasknapton/'> <img className='LinkedenPic' src={linkedinPic}></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;