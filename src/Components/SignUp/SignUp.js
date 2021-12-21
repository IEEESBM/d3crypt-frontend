import React from 'react'
import styles  from './signup.module.css'
import { ReactComponent as Illustration } from './Taking notes-bro 1.svg'
import { ReactComponent as Logo } from './Group 83.svg'
import MobileNav from '../MobileNav/MobileNav'
import NavBar from '../Navbar/Navbar'


function SignUp() {
  return (
    <div className={styles.bg}>
      <MobileNav/>
      <div className={styles.head}>
        {/* <NavBar/> */}
      </div>
      <div className={styles.hero}>
        <div className={styles.illustration}>
          <Logo className={styles.logo} />
          <Illustration className={styles.image} />
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
        </div>
        <div className={styles.content}>
        <form className={styles.container}>
          <div className={styles.text}>
          <p className={styles.title}>Sign Up</p>
          <div className={styles.form}>
            <input className={styles.label} type='text' placeholder='Full name'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' placeholder='Email ID'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' placeholder='Mobile No.'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' placeholder='College'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' placeholder='Application ID'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' placeholder='IEEE Membership N.(if any)'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' placeholder='Teammate name'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' placeholder='Teammate Email ID'></input>
          </div>
          </div>
          <button className ={styles.register}type='submit'>Register</button>  
          </form>
          <p className={styles.link}>Already have an account? <a>Sign In!</a></p>
          </div>
        

      </div>

      
    </div>
  )
}

export default SignUp
