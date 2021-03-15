import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//STATE
import AuthState from "./context/Auth/AuthState";
import ChildrenState from "./context/children/ChildrenState";

//Components
import LandingPage from "./layout/LandingPage";
import Login from "./layout/Login";
import NavBar from "./layout/NavBar";
import Signup from "./layout/Signup";
import DisplayChildren from "./components/children/Children";
//Auth Token
import setAuthToken from "./utils/SetAuthToken";
//Private Routes
import PrivateRoute from "./components/routing/PrivateRoute";
import ChoresState from "./context/chores/ChoreState";
import DisplayChores from "./components/chores/Chores";

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <AuthState>
      <ChildrenState>
        <ChoresState>
          <Router>
            <Fragment>
              <NavBar />
              <div className="App">
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <PrivateRoute exact path="/kids"component={DisplayChildren}/>
                  <PrivateRoute exact path ="/kids/chores/:id" component={DisplayChores}/>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </ChoresState>
      </ChildrenState>
    </AuthState>
  );
}

export default App;
