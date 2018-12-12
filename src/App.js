import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './common/less/common.less'
import { Router, Route } from 'react-router-dom';
import history from './common/history'
import Login from './common/pages/login'
import Main from './common/pages/main/main'
import Bac from './common/pages/bac'
import Detail from './common/pages/detail';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Route path='/' component={Bac} exact />
          <Route path='/bac' component={Bac}  />
          <Route path='/main' component={Main} />
          <Route path='/detail/:id' component={Detail} />
        </div>
      </Router>
    )
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React blog</h1>
//           <h2>学习只是</h2>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
