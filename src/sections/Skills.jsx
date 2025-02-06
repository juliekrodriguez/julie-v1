import styles from "./SkillsStyles.module.css";
import checkMarkIconLight from "../assets/checkmark-light.svg";
import checkMarkIconDark from "../assets/checkmark-dark.svg";
import SkillList from "../common/SkillList";
import { useTheme } from "../common/ThemeContext";


function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  
    return (
      <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="C++" />
          <SkillList src={checkMarkIcon} skill="C#" />
          <SkillList src={checkMarkIcon} skill="Java" />
          <SkillList src={checkMarkIcon} skill="Javascript" />
          <SkillList src={checkMarkIcon} skill="Python" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="React" />
          <SkillList src={checkMarkIcon} skill="Angular" />
          <SkillList src={checkMarkIcon} skill="Node" />
          <SkillList src={checkMarkIcon} skill="HTML/CSS" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Agile" />
          <SkillList src={checkMarkIcon} skill=".NET" />
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="AWS" />
        </div>
      </section>
    );
  }
  
  export default Skills;
  