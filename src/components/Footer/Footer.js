import React from 'react';
import style from "./footer.module.css"
import gitLogo from "../../Assets/icons8-github-40.png";
import twitLogo from "../../Assets/icons8-twitter-40.png";
import linkLogo from "../../Assets/icons8-linkedin-40.png";
import trademark from "../../Assets/icons8-trademark-40.png"

const Footer = () => {
  return (
    <div className={style.footer}>

      <div className={style.row}>
        <div className={style.col}>
            <p>Address: <span>Bengaluru, Karnataka 560045</span></p>
            <p>Something Co.<img className={style.trademark} src={trademark} alt="trademark" /></p>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.col}>
            <a href='#download' id='about'><p>About</p></a>
        </div>
        <div className={style.column}>
            <p>Connect with me</p>
            <a href='https://www.linkedin.com/in/mahesh-nimkar/'><img className={style.imgcol} src={linkLogo} alt="LinkedIn logo" /></a>
            <a href='https://twitter.com/?lang=en-in'><img className={style.imgcol} src={twitLogo} alt="Twitter logo" /></a>
            <a href='https://github.com/m-nimkar070'><img className={style.imgcol} src={gitLogo} alt="GitHub logo" /></a>
        </div>
      </div>

    </div>
  )
}

export default Footer;
