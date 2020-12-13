import React from 'react';
import './App.css';
import RegistrationForm from "./components/registrationForm";
import {Route, Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from "./store/store";
import history from "./commonThings/history";
import TheBestPlayer from "./components/TheBestPlayer";

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path="/registration" component={RegistrationForm}/>
                        <Route exact path="/" component={TheBestPlayer}/>
                  </Switch>
              </Router>
          </Provider>
      </div>
    )
}
export default App
