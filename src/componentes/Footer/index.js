import './Footer.css'
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'


const Footer = () => {
    return (
        <footer className='rodape'>
            <a href='https://github.com/Carl-Vini' target='_blank'>
                <AiFillGithub color='#1C86EE' size={30} cursor='pointer' />
            </a>
            <a href='https://www.linkedin.com/in/carlos-vinícius-bezerra-sampaio-b6a302254/' target='_blank'>
                <AiFillLinkedin color='#1C86EE' size={30} cursor='pointer' />
            </a>
            <a href='mailto:carlosviniciussampaio@hotmail.com' target='_blank'>
                <AiOutlineMail color='#1C86EE' size={30} cursor='pointer' />
            </a>
        </footer>

    )
}

export default Footer;