import React from 'react'
import styles from '../../styles/LeftView.module.css'
import Profileimage from './profilePhoto.jpeg'

function LeftNav() {
    return (
        <div className={styles.leftView_container}>
            <div className={styles.leftView_imageDiv}>
                <img src={Profileimage} alt="profilephoto" className={styles.leftView_image}/>
                <h4><a href="#about">PRIYA GUPTA</a></h4>
            </div>

        <div className={styles.leftView_box}>
            <div className={styles.leftInner}><a href="#about" className={styles.points}>ABOUT</a></div>
            <div className={styles.leftInner}><a href="#education" className={styles.points}>EDUCATION</a></div>
            <div className={styles.leftInner}><a href="#experience" className={styles.points}>EXPERIENCE</a></div>
            <div className={styles.leftInner}><a href="#skills" className={styles.points}>SKILLS</a></div>
            <div className={styles.leftInner}><a href="#interests" className={styles.points}>INTERESTS</a></div>
            <div className={styles.leftInner}><a href="#projects" className={styles.points}>PROJECTS</a></div>
            <div className={styles.leftInner}><a href="#achievements" className={styles.points}>ACHIEVEMENTS</a></div>
            <div className={styles.leftInner}><a href="https://drive.google.com/file/d/1VIMFue5y9UDN41GHxaE3QRekRz6UgGwr/view?usp=drivesdk" className={styles.points}>ACCESS MY RESUME</a></div>

        </div>
        </div>
    )
}

export default LeftNav
