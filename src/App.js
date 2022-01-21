import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import MobileNavbar from "./Components/MobileNav/MobileNav.jsx";
import UserProfile from "./Components/UserProfile/UserProfile";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/Signin/signin";
import Leaderboard from "./Components/Leaderboard/LeaderBoard";
import Home from "./Components/Home/Home";
import Contact from "./Components/Home/Contact";
import H2 from "./Components/Home/H2";
import Mobileh2 from "./Components/Home/Mobileh2";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import FAQs from "./Components/FAQs/FAQ";
import Rules from "./Components/Rules/Rules";
import Verification from "./Components/Verification/Verification";
import Competition from "./Components/Competition/Competition";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { verified, returnDefault } from "./redux/authSlice";
import { useDispatch } from "react-redux";
import { check_verified } from "./redux/authSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.signUp.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MobileNavbar />
            <Navbar />
            <Home />
            <H2 />
            <Mobileh2 />
            <Contact />
          </Route>
          <Route exact path="/user-profile">
            <UserProfile />
          </Route>
          <Route exact path="/register">
            <Navbar />
            <SignUp />
          </Route>
          <Route exact path="/reset/:id/:token">
            <MobileNavbar />
            <Navbar />
            <ResetPassword />
          </Route>
          <Route exact path="/forgot">
            <MobileNavbar />
            <Navbar />
            <ForgotPassword />
          </Route>
          <Route exact path="/signin">
            <>
              <Navbar />
              <MobileNavbar />
              <SignIn />
            </>
          </Route>
          <Route exact path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route exact path="/faq">
            <MobileNavbar />
            <Navbar />
            <FAQs />
          </Route>
          <Route exact path="/rules">
            <MobileNavbar />
            <Navbar />
            <Rules />
          </Route>
          <Route exact path="/verification">
            <Verification />
          </Route>
          <Route exact path="/competition">
            <Competition />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
