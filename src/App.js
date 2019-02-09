import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchComponent from "./component/searchComponent/SearchInputComponent/searchComponent";
import Resulttable from "./component/ListComponent/ResultTable/Resulttable"


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchComponent />
         <Resulttable /> 
      </div>
    );
  }
}

export default App;
