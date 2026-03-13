import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQH79jc9--4Adg/profile-displayphoto-scale_200_200/B4DZnI53dVHwAY-/0/1760012237999?e=1773878400&v=beta&t=Ye088BoUGaPjaqW1MOq7rWW91OM5VtNfJbC9LOEdpmQ" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/abod-alattal2001" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abdallah-alattal-552885220/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Abdallah Alattal</h1>
          <p>AI & Robotics Integration Specialist</p>
          
          {/* تم تحديث الروابط هنا لتكون خاصة بك */}
          <div className="mobile_social_icons">
            <a href="https://github.com/abod-alattal2001" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abdallah-alattal-552885220/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;