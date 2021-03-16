import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//STATE & PROVIDERS 
import AuthState from "./context/Auth/AuthState";
import ChildrenProvider from "./context/children/childrenContext";
import ChoreProvider from "./context/chores/choreContext";

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
import DisplayChores from "./components/chores/Chores";


function App() {
  useEffect(()=>{
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  },[])
  

  return (
    <AuthState>
      <ChildrenProvider>
        <ChoreProvider>
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
        </ChoreProvider>
      </ChildrenProvider>
    </AuthState>
  );
}

export default App;
