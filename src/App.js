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
        </Switch>
      </Router>
    </div>
  );
}

export default App;