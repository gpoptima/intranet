import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Index.css';
import App from './containers/App';
import Login from './containers/Login';
import NoMatch from './components/NoMatch';
import { Switch, Route, Redirect,HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import config from './config/config.json';


const sessionChecker = ({ getState }) => {
   return (next) => (action) => {
      if (action.code !== undefined) {
         if (action.code === -19) {
            localStorage.removeItem('@@auth_user');
            window.location.reload();
         }
      }
      return next(action);
   };
};

const store = createStore(
   reducers,
   config[config.mode].logger
      ? applyMiddleware(thunk, sessionChecker, require('redux-logger').logger)
      : applyMiddleware(thunk, sessionChecker)
);


ReactDOM.render(
   <React.StrictMode>
   <Provider store={store}>
     <HashRouter>
        <Switch>
          <Route exact path='/'>
             <Redirect to='/login'/>
          </Route> 
          <Route exact path='/login'>
             <Login/>
          </Route>
          <Route path='/app' >
              <App/>
          </Route>
          <Route component={NoMatch}/>
        </Switch>
      </HashRouter>
   </Provider>
   </React.StrictMode>,
  document.getElementById('root')
);
