import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      step: 'X'
    }
  }

  reset(event) {
    var item = document.getElementsByClassName('item');
    var title = document.getElementById('title');
      for (var i = 0; i < item.length; i++) {
        item[i].innerHTML = '';
        title.innerHTML = '';
      }
    };
 
  clicked(event) {
    var item = document.getElementsByClassName('item');
    var title = document.getElementById('title');
    var stepCount = 0;
    if (event.target.innerHTML == '') {
      event.target.innerHTML = this.state.step;
      this.setState ({
        step: this.state.step == "X" ? "0" : "X"
      })
      stepCount++;
      checkWinner();
    };


      

      function checkWinner(argument) {

        if (item[0].innerHTML=='X' && item[1].innerHTML=='X' && item[2].innerHTML=='X' ) {
          title.innerHTML = " X a winner";
        } 
        if (item[3].innerHTML=='X' && item[4].innerHTML=='X' && item[5].innerHTML=='X' ) {
         title.innerHTML = " X a winner";
        } 
        if (item[6].innerHTML=='X' && item[7].innerHTML=='X' && item[8].innerHTML=='X' ) {
          title.innerHTML = " X a winner";
        } 
        if (item[0].innerHTML=='X' && item[4].innerHTML=='X' && item[8].innerHTML=='X' ) {
          title.innerHTML = " X a winner";
        } 
        if (item[2].innerHTML=='X' && item[4].innerHTML=='X' && item[6].innerHTML=='X' ) {
          title.innerHTML = " X a winner";
        } 
        if (item[0].innerHTML=='X' && item[3].innerHTML=='X' && item[6].innerHTML=='X' ) {
          title.innerHTML = " X a winner";
        } 
        if (item[1].innerHTML=='X' && item[4].innerHTML=='X' && item[7].innerHTML=='X' ) {
          title.innerHTML = " X a winner";
        } 
        if (item[2].innerHTML=='X' && item[5].innerHTML=='X' && item[8].innerHTML=='X' ) {
          title.innerHTML = " X a winner";
        }

      //
        if (item[0].innerHTML=='0' && item[1].innerHTML=='0' && item[2].innerHTML=='0' ) {
          title.innerHTML = " 0 a winner";
        } 
        if (item[3].innerHTML=='0' && item[4].innerHTML=='0' && item[5].innerHTML=='0' ) {
          title.innerHTML = " 0 a winner";
        } 
        if (item[6].innerHTML=='0' && item[7].innerHTML=='0' && item[8].innerHTML=='0' ) {
          title.innerHTML = " 0 a winner";
        } 
        if (item[0].innerHTML=='0' && item[4].innerHTML=='0' && item[8].innerHTML=='0' ) {
          title.innerHTML = " 0 a winner";
        } 
        if (item[2].innerHTML=='0' && item[4].innerHTML=='0' && item[6].innerHTML=='0' ) {
          title.innerHTML = " 0 a winner";
        } 
        if (item[0].innerHTML=='0' && item[3].innerHTML=='0' && item[6].innerHTML=='0' ) {
          title.innerHTML = " 0 a winner";
        } 
        if (item[1].innerHTML=='0' && item[4].innerHTML=='0' && item[7].innerHTML=='0' ) {
          title.innerHTML = " 0 a winner";
        } 
        if (item[2].innerHTML=='0' && item[5].innerHTML=='0' && item[8].innerHTML=='0' ) {
          title.innerHTML = " 0 a winner";
        } 
      };
  }

  



  render() {
    return (
    <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div id="game" onClick={(e)=>this.clicked(e)}>
        <div className="item" data-num="0"></div>
        <div className="item" data-num="1"></div>
        <div className="item" data-num="2"></div>
        <div className="item" data-num="3"></div>
        <div className="item" data-num="4"></div>
        <div className="item" data-num="5"></div>
        <div className="item" data-num="6"></div>
        <div className="item" data-num="7"></div>
        <div className="item" data-num="8"></div>
      </div>
      <div id="btn" onClick={(e)=>this.reset(e)}>RESET</div>
      <h1 id="title"></h1>
    </div>
    );
  }
}

export default App;
