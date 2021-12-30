import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import MobileNavbar from "./Components/MobileNav/MobileNav";
import UserProfile from "./Components/UserProfile/UserProfile";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/Signin/signin";
import Leaderboard from "./Components/Leaderboard/LeaderBoard";
import Home from "./Components/Home/Home";
import Contact from "./Components/Home/Contact";
import H2 from "./Components/Home/H2";
import FAQs from "./Components/FAQs/FAQ";
import Rules from "./Components/Rules/Rules";
import Verification from "./Components/Verification/Verification";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MobileNavbar />
            <Navbar />
            <Home />
            <H2 />
            <Contact />
          </Route>
          <Route exact path="/user-profile" component={UserProfile} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/faq">
            <Navbar />
            <FAQs />
          </Route>
          <Route exact path="/rules">
            <Navbar />
            <Rules />
          </Route>
          <Route exact path='/verification' component={Verification}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
