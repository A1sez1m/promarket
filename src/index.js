import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Basket from './Basket';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route  path="/basket"  component={Basket}/>
        <Route exact path="/">
          <App/>
        </Route>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

