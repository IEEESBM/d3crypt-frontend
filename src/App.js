import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import MobileNavbar from "./Components/MobileNav/MobileNav";
import UserProfile from "./Components/UserProfile/UserProfile";
import SignUp from './Components/SignUp/SignUp'
import Signin from './Components/Signin/signin'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MobileNavbar />
            <Navbar />
            <Home />
          </Route>
          <Route exact path='/user-profile' component={UserProfile} />
          <Route exact path='/register' component={SignUp} />
          <Route exact path='/signin' component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;