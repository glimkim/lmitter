import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Navigation from 'components/Navigation';
import Profile from 'routes/Profile';

const AppRouter = ({isLoggedIn, userObj, refreshUser}) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn?
                    <>
                        <Navigation userObj={userObj} />
                        <Route exact path="/">
                            <Home userObj={userObj} />
                        </Route>
                        <Route exact path="/profile">
                            <Profile userObj={userObj} refreshUser={refreshUser} />
                        </Route>
                    </>
                    :
                    <>
                        <Route exact path="/">
                            <Auth refreshUser={refreshUser} />
                        </Route>
                    </>
                }
            </Switch>
        </Router>
    );
}

export default AppRouter;