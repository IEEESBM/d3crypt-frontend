import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import MobileNavbar from "./Components/MobileNav/MobileNav";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/"}>
          <MobileNavbar/>
            <Navbar/>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;