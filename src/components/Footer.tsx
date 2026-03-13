import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/abod-alattal2001" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/abdallah-alattal-552885220/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>I build AI systems that solve real-world problems.</p>
    </footer>
  );
}

export default Footer;