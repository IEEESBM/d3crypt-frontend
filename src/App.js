import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Router>
        {/* <MobileNavbar />
        <Navbar /> */}
        <Switch>
          <Route exact path="/">
          <MobileNavbar />
        <Navbar />
            <Home />
            <H2 />
            <Mobileh2 />
            <Contact />
          </Route>
          <Route exact path="/user-profile" component={UserProfile} />
          <Route exact path="/register">
            <SignUp />
            <MobileNavbar />
            <Navbar />
          </Route>
          <Route exact path="/resetpassword">
            
            <MobileNavbar />
            <Navbar />
            <ResetPassword />
          </Route>
          <Route exact path="/forgotpassword">
         
          <MobileNavbar />
            <Navbar />
            <ForgotPassword />
          </Route>
          <Route exact path="/signin" >
            <SignIn/>
            <MobileNavbar />
            <Navbar />
            </Route>
          <Route exact path="/leaderboard">
            <Leaderboard/>
            <MobileNavbar />
        <Navbar />
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
          <Route exact path="/verification" component={Verification}></Route>
          <Route exact path="/competition">
          <MobileNavbar />
            <Competition/>
        <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
