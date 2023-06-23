
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineDribbble} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {RiBehanceLine} from 'react-icons/ri'
import {AiOutlineLinkedin} from 'react-icons/ai'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      {/* <a href="#home" className="footer__logo">Bharat K</a> */}
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/bharat-kasera-481a27263/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Bharat-kasera" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.behance.net/bharat_ui" target="_blank" rel="noreferrer" ><RiBehanceLine /></a>
      <a href="https://dribbble.com/__wolf" target="_blank" rel="noreferrer" ><AiOutlineDribbble /></a>
      <a href="https://www.instagram.com/bharat_ui/?igshid=OTJhZDVkZWE%3D" target="_blank" rel="noreferrer" ><BsInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Bharat {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
