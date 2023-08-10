import React from 'react';
import ProfilePic from '../images/pic.JPG';

export default function Info() {
    return (
        <div className='info--content'>
            <img src={ProfilePic} alt='Profile Picture' className='info--pic'/>
            <h1 className='info--name'>Min Yao Lee</h1>
            <h3 className='info--position'>Software Engineer</h3>
            <a href='' className='info--website'>xxx.website</a>
            <button className='info--email'><i className='fa fa-envelope'></i><a href='mailto: minyao0505@gmail.com'>Email</a></button>
        </div>
    );
}