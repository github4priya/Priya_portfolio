import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from '../../styles/LeftView.module.css'
import profileimage from '../../images/profilePhoto.jpeg'

function LeftNav() {
    return (
        <div className={styles.leftView_container}>

            <div className={styles.leftView_imageDiv}>
                <img src="https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/p600x600/251128377_310405094238392_4421595162759485041_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=NppyM-LIL48AX9KSRWO&tn=rOLq799qfRycQUmk&_nc_ht=scontent.fixr3-2.fna&oh=00_AT9k7n6mxp6RHe8kP2loPOicGLhErmf0QNvxi2PTgy10xA&oe=61C6DBFC" alt="profilephoto" className={styles.leftView_image}/>
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
