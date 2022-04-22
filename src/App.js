import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      text: 'ooga booga',
      x: 1110, y: 22220 
    }

    this.MouseOver = this.MouseOver.bind(this);
    this.MouseOut = this.MouseOut.bind(this);
  }

  MouseOver(event) {
    console.log(this.state.show)
    this.setState({ show: true });
  }

  MouseOut(event){
    console.log(this.state.show)
    this.setState({ show: false });
  }

  render () {
    const show = this.state.show
    console.log(this.props)

    return (


      <main className="App-header">
        <div className="container">
          <div className="row m-2">
            <div className="bg-dark-blue p-4 col-lg-4 col-md-6 mx-auto rounded">
              <div className="position-relative" role="button" onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}>
                {/* { this.state.show.toString() } */}
                <div className={`position-absolute w-100 bg-cyan h-100 d-flex justify-content-center align-items-center rounded ${this.state.show ? '' : 'd-none'}`}>
                  <img src="/images/icon-view.svg" style={{ height: '48px' }} className="rounded pe-2" alt="logo" />
                </div>
                <img src="/images/image-equilibrium.jpg" className="w-100 myDiv rounded" alt="logo" />
              </div>
              <div className="hide">asdasd</div>
              
              <a href="#" class="text-decoration-none">
              <span className="mt-3 d-block text-heading fw-bold" role="button">
                Equilibrium #3429
              </span>
              </a>
              <div className="text-body-sp color-soft-blue my-3">
                Our Equilibrium collection promotes balance and calm. <br />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <img src="/images/icon-ethereum.svg" style={{ height: '18px' }} className="rounded pe-2" alt="logo" />
                  <span className="text-caption color-cyan">
                    0.041 ETH 
                  </span>
                </div>
                <div>
                  <img src="/images/icon-clock.svg" style={{ height: '18px' }} className="rounded pe-2" alt="logo" />
                  <span className="text-caption-bold color-soft-blue">
                    3 days left
                  </span>
                </div>
              </div>
  
              <hr />
              <img src="/images/image-avatar.png" style={{ height: '33px' }} className="border-white me-3" alt="logo" />
              <span className="text-caption color-soft-blue">
                Creation of&nbsp;
              </span>
              <a href="#" class="text-decoration-none">
                <span className="text-caption" role="button">
                  Jules Wyvern
                </span>
              </a>
            </div>
          </div>
        </div>
  
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </main>
    );
  }
}

export default App;
