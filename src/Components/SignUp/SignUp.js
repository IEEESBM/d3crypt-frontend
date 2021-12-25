import { React, useState, useEffect } from 'react'
import styles from "./signup.module.css";
import { ReactComponent as Illustration } from "./Taking notes-bro 1.svg";
import { ReactComponent as Logo } from "./Group 83.svg";
import MobileNav from "../MobileNav/MobileNav";
import NavBar from "../Navbar/Navbar";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/SignUp';




function SignUp() {

  const { name, email, phone, college, ID, memNo, teamName, teamEmail, password } = useSelector((state) => state.signUp);

  const dispatch = useDispatch();

  const initialState = {
    username: '',
    email: '',
    password: '',
    phone: '',
    college: '',
    ID: '',
    memNo: '',
    
  }

  const [newUser, setNewUser] = useState(initialState);


  const handleOnChange = e => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch(signUp(newUser));
  }

  return (
    <div className={styles.bg}>
      <MobileNav />
      <div className={styles.head}><NavBar /></div>
      <div className={styles.hero}>
        <div className={styles.illustration}>
          <Logo className={styles.logo} />
          <Illustration className={styles.image} />
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </p>
        </div>
        <div className={styles.content}>
        <form className={styles.container} onSubmit={handleOnSubmit}>
          <div className={styles.text}>
          <p className={styles.title}>Sign Up</p>
          <div className={styles.form}>
            <input className={styles.label} type='text' name='username' value={newUser.username} 
            onChange={handleOnChange}
            placeholder='Full name'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' name='email' value={newUser.email} onChange={handleOnChange}placeholder='Email ID'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' name='phone'   value={newUser.phone} 
            onChange={handleOnChange}
            placeholder='Mobile No.'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' name='college' value={newUser.college} 
            onChange={handleOnChange}
            placeholder='College'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' name='ID'  value={newUser.ID} 
            onChange={handleOnChange}
            placeholder='Application ID'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' name='memNo' value={newUser.memNo} 
            onChange={handleOnChange}
            placeholder='IEEE Membership N.(if any)'></input>
          </div>
          <div className={styles.form}>
            <input className={styles.label} type='text' name='password' value={newUser.password} 
            onChange={handleOnChange}
            placeholder='Password'></input>
          </div>
          </div>
          <button className ={styles.register}type='submit'>Register</button>  
          </form>
          <p className={styles.link}>
            Already have an account? <a href='/signin'>Sign In!</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
