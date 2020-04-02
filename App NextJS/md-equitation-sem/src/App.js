import React from 'react';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import UserPage from "./Pages/UserPage";



export default function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route path="/connexion">
                            <Login />
                        </Route>
                        <Route path="/inscription">
                            <Signin />
                        </Route>
                        <Route path="/moncompte">
                            <UserPage />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}


