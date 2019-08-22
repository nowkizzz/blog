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

// document.onclick = function (e) {
//   circleDot(e)
//   circleDot(e, 50, 10)
//   // circleDot(e, -60, 20)
//   // circleDot(e, 80, 10)
//   circleDot(e, -45, 30)
//   circleDot(e, -60, 25)
//   circleDot(e, 80, 20)
//   circleDot(e, 40, 30)
//   circleDot(e, 60, 10)
//   circleDot(e, -30, -30)
//   circleDot(e, -30, 30)
//   circleDot(e, -50, 50)
//   circleDot(e, -50, -50)
//   circleDot(e, -50, -20)
//   // var symbol = document.createElement('b')
//   // symbol.style.position = 'absolute'
//   // symbol.style.top = (e.pageY) + 'px'
//   // symbol.style.left = (e.pageX) + 'px'
//   // symbol.style.zIndex = 8888
//   // symbol.style.transition = 'all 1s'
//   // symbol.style.border = '1px solid yellow'
//   // symbol.style.borderColor =
//   //   `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
//   // symbol.style.width = '0px'
//   // symbol.style.height = '0px'
//   // symbol.style.borderRadius = '50%'
//   // symbol.addEventListener("transitionend", function (et) {
//   //   // console.log('====================================');
//   //   // console.log(et);
//   //   // console.log('====================================');
//   //   if (et.propertyName == 'opacity' && et.srcElement.style.opacity == 0) {
//   //     et.srcElement.remove()
//   //   }
//   // })
//   // document.body.appendChild(symbol)
//   // requestAnimationFrame(() => {
//   //   symbol.style.width = '80px'
//   //   symbol.style.margin = '-40px -40px'
//   //   symbol.style.height = '80px'
//   //   symbol.style.opacity = '0'
//   // })
// }

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Route path='/' component={Bac} exact />
          <Route path='/bac' component={Bac} />
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
