import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Login from './components/Login';
import ShoppingList from './components/ShoppingList';

import { BrowserRouter, Route } from "react-router-dom";
// import Maps from './containers/mapsContainer';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return ( 
      <BrowserRouter basename={`/${process.env.REACT_APP_BASENAME}`}>
        <Provider store = {store}>
          <div className="App">
          <AppNavbar />
            <Route path="/" exact component={Login} />
            <Route path="/ShoppingList/" component={ShoppingList} />
            {/* <Maps /> */}
            
          </div>
        </Provider>
      </BrowserRouter>
      
    );
  }
}

export default App;
