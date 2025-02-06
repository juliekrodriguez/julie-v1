import styles from "./HeroStyles.module.css";
import heroImg from "../assets/hero-img.png";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

import twitterLight from "../assets/twitter-light.svg";
import githubLight from "../assets/github-light.svg";
import linkedinLight from "../assets/linkedin-light.svg";

import twitterDark from "../assets/twitter-dark.svg"
import githubDark from "../assets/github-dark.svg"
import linkedinDark from "../assets/linkedin-dark.svg"

import CV from "../assets/cv.pdf";
import { useTheme } from "../common/ThemeContext";

function Hero() {
  const { theme, toogleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  console.log("Current theme:", theme);
console.log("Theme icon path:", themeIcon);


  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="prof pic" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="night mode icon"
          onClick = {toogleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Julie Rodriguez <br />
        </h1>
        <h2>software engineer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="twitter icon" />
          </a>

          <a href="https://github.com/juliekrodriguez" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>

          <a href="https://www.linkedin.com/in/julietrodriguez1/" target="_blank">
            <img src={linkedinIcon} alt="linkedIn icon" />
          </a>
        </span>
        <p className={styles.desc}>Hello,<br></br>I work in the aerospace industry</p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
