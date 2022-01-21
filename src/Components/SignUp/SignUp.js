import { React, useState, useEffect } from "react";
import styles from "./signup.module.css";
import { ReactComponent as Illustration } from "./Taking notes-bro 1.svg";
import { ReactComponent as Logo } from "./Group 83.svg";
import MobileNav from "../MobileNav/MobileNav";
import NavBar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./signUpErrors.css";
import { register } from "../../redux/actions/authSignup";
import { Navbar } from "react-bootstrap";
import axios from "axios";

function SignUp() {
  const dispatch = useDispatch();

  useEffect(async () => {

    const jwt = JSON.parse(localStorage.getItem("jwt"));
    await axios.get("http://localhost:4000/check-verified", {
      headers: {
        'x-access-token': jwt
      }
    })
      .then((res) => {
        console.log(res);
        if (res.data === 'allow_access') {
          window.location.href = '/';
        }
        else {
          console.log(res.data);
        }
        // props.history.push("/")
      })
      .catch((err) => {
        console.log(err.message);
        // window.location.href = '/';
      })
  })

  const initialState = {
    username: "",
    email: "",
    password: "",
    phone: "",
    college: "",
    ID: "",
    mem: null,
    memNo: "",
  };

  const [newUser, setNewUser] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(register(newUser)).then(
      () => { },
      (error) => {
        console.log(error);
        document.querySelector(".nameError").innerHTML = "&nbsp;";
        document.querySelector(".emailError").innerHTML = "&nbsp;";
        document.querySelector(".passwordError").innerHTML = "&nbsp;";
        document.querySelector(".phoneError").innerHTML = "&nbsp;";
        document.querySelector(".collegeError").innerHTML = "&nbsp;";
        document.querySelector(".memError").innerHTML = "&nbsp;";
        if (error.username) {
          console.log(error.username);
          document.querySelector(".nameError").innerHTML = error.username;
        }
        if (error.email) {
          console.log(error.email);
          document.querySelector(".emailError").innerHTML = error.email;
        }
        if (error.password) {
          console.log(error.password);
          document.querySelector(".passwordError").innerHTML = error.password;
        }
        if (error.phone) {
          console.log(error.phone);
          document.querySelector(".phoneError").innerHTML = error.phone;
        }
        if (error.college) {
          console.log(error.college);
          document.querySelector(".collegeError").innerHTML = error.college;
        }
        if (error.mem) {
          console.log(error.mem);
          document.querySelector(".memError").innerHTML = error.mem;
        }
      }
    );
  };

  return (
    <div className={styles.bg}>
      <MobileNav />
      <div className={styles.head}>
        <NavBar />
      </div>
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
                <input
                  className={styles.label}
                  type="text"
                  name="username"
                  value={newUser.username}
                  onChange={handleOnChange}
                  placeholder="Full name"
                ></input>
              </div>
              <div className="nameError error">&nbsp;</div>
              <div className={styles.form}>
                <input
                  className={styles.label}
                  type="text"
                  name="email"
                  value={newUser.email}
                  onChange={handleOnChange}
                  placeholder="Email ID"
                ></input>
              </div>
              <div className="emailError error">&nbsp;</div>
              <div className={styles.form}>
                <input
                  className={styles.label}
                  type="text"
                  name="phone"
                  value={newUser.phone}
                  onChange={handleOnChange}
                  placeholder="Mobile No."
                ></input>
              </div>
              <div className="phoneError error">&nbsp;</div>
              <div className={styles.form}>
                <input
                  className={styles.label}
                  type="text"
                  name="college"
                  value={newUser.college}
                  onChange={handleOnChange}
                  placeholder="College"
                ></input>
              </div>
              <div className="collegeError error">&nbsp;</div>
              <div className={styles.form}>
                <input
                  className={styles.label}
                  type="text"
                  name="ID"
                  value={newUser.ID}
                  onChange={handleOnChange}
                  placeholder="Application ID"
                ></input>
              </div>
              <div>&nbsp;</div>
              <div className={styles.radioForm}>
                <div className={styles.radio}>ieee member?</div>
                <input
                  type="radio"
                  value={true}
                  name="mem"
                  onChange={handleOnChange}
                />
                <span className={styles.options}>yes</span>
                <input
                  type="radio"
                  value={false}
                  name="mem"
                  onChange={handleOnChange}
                />
                <span className={styles.options}>no</span>
              </div>
              <div className="memError error">&nbsp;</div>
              <div className={styles.form}>
                <input
                  className={styles.label}
                  type="text"
                  name="memNo"
                  value={newUser.memNo}
                  onChange={handleOnChange}
                  placeholder="IEEE Membership N.(if any)"
                ></input>
              </div>
              <div>&nbsp;</div>
              <div className={styles.form}>
                <input
                  className={styles.label}
                  type="text"
                  name="password"
                  value={newUser.password}
                  onChange={handleOnChange}
                  placeholder="Password"
                ></input>
              </div>
              <div className="passwordError error">&nbsp;</div>
            </div>
            <button className={styles.register} type="submit">
              Register
              <div className={styles.overlay}></div>
            </button>
          </form>
          <p className={styles.link}>
            Already have an account? <a href="/signin">Sign In!</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
