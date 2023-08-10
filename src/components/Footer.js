import React from 'react';
import DiscordIcon from '../images/Discord Icon.png';
import InstaIcon from '../images/Instagram Icon.png';
import LinkedInIcon from '../images/Linkedin Icon.png';
import GitHubIcon from '../images/GitHub Icon.png';


export default function Footer() {
    return (
        <div className='footer--content'>
            <a href='https://www.linkedin.com/in/min-yao-lee/'><img src={LinkedInIcon} alt='LinkedIn Icon' className='footer--icon'/></a>
            <a href='https://github.com/myaooooo98'><img src={GitHubIcon} alt='GitHub Icon' className='footer--icon'/></a>
            <a href='https://discord.gg/mPEUVefV'><img src={DiscordIcon} alt='Discord Icon' className='footer--icon'/></a>
            <a href='https://www.instagram.com/myao_05/'><img src={InstaIcon} alt='Instagram Icon' className='footer--icon'/></a>
        </div>
    );
}