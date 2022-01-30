import logo from './/KevinDao.png';
import closeIcon from './/closeIcon.png';
import burgerIcon from './/hamburgerIcon.png';

import './App.css';
import React from 'react';

// make a component for the header using class component
class Header extends React.Component {
    state = {
        showBurger: false
    }

    showBurgerMenu = (bool) => {
        this.setState({
            showBurger: bool
        });
    }

    render() {
        return(
            <header>
                <nav className = "nav">
                    {/* make the left part of navbar */}
                    <div className = "logo">
                        <img className = "logo" alt="logo" src={logo}></img>
                        <h1>Kevin Dao's</h1>
                    </div>
      
                    {/* make the right part of navbar */}
                    <ul className= "main">
                        <li className="nav-item"><a href='#Item1'>Item 1</a></li>
                        <li className="nav-item"><a href='#Item2'>Item 2</a></li>
                        <li className="nav-item"><a href='#Item3'>Item 3</a></li>
                        <li className="nav-item"><a href='#Item4'>Item 4</a></li>
                    </ul>
      
                    {/* make the hamburger */}
                    <div className="burger">
                       {/* for in the label tag tbd */}
                       <label>
                        <img id= "burgerPic" alt="show menu" src={burgerIcon} onClick= {this.showBurgerMenu.bind(null, true)}></img>
                       </label>
                       { this.state.showBurger && (<Burger />) }
                    </div>
      
                </nav>
            </header>
        );
    }
  
}


//make a component for burger menu's ul and li
class Burger extends React.Component{
    state = {
        showBurger: true
    }

    showBurgerMenu = (bool) => {
        this.setState({
            showBurger: bool
        });
    }
    render() {
        return (
            <div id='burgerWrapper'>
                <img id= "closeIcon" alt="close" src={closeIcon} onClick= {this.showBurgerMenu.bind(null, false)}></img>
                <ul className= "burger menu">
                    <li className= "burger"><a className= "burgerA" href='#Item1'>Item1</a></li>
                    <li className= "burger"><a className= "burgerA" href='#Item2'>Item2</a></li>
                    <li className= "burger"><a className= "burgerA" href='#Item3'>Item3</a></li>
                    <li className= "burger"><a className= "burgerA" href='#Item4'>Item4</a></li>
                </ul>
            </div>
        )
    }
}

//make a component for the welcome message using class component
class Welcome extends React.Component{
  state = {
    message: "Welcome Message"
  }

  changeMessage = () => {
    if(this.state.message === "Welcome Message"){
        this.setState({ message: "Have a Good Time!" });
    } else if(this.state.message === "Have a Good Time!"){
      this.setState({ message: "Welcome Message" });
    }
  }

  render() {
      return (
          <main>
              <div className= "welcome-message">
                  <h1 className= "main-message" onClick= {this.changeMessage}> {this.state.message} </h1>
              </div>
          </main> 
      );
  }
}


//make a component for the title using class component
class Title extends React.Component{
  render() {
      return (
          <main>
              <div id= "section-title">
                  <h1 className= "section-title">Section Title</h1>
              </div>
          </main> 
      );
  }
}


//make a component for content box 1-4
class ContentBox extends React.Component{
  render() {
      return (
          <section className= "box" id= "content-box-wrapper">
              <div className= "content-box">Content Box 1</div>
              <div className= "content-box">Content Box 2</div>
              <div className= "content-box">Content Box 3</div>
              <div className= "content-box">Content Box 4</div>
          </section>
      );
  }
}


//make the CTA btn component
class CTAbtn extends React.Component{
    state = {
        showHiddenBox: false
    }

    _showHiddenBox = (bool) => {
        this.setState({
            showHiddenBox: bool
        });
    }

  render() {
      return (
          <div className= "button">
              <button id= "CTA-button" onClick= {this._showHiddenBox.bind(null, true)}>Call to Action</button>
              { this.state.showHiddenBox && <ContentBoxHidden /> }
          </div>
      );
  }
}



//make a component for content box 5-8(which are hidden by default)
class ContentBoxHidden extends React.Component{
  render() {
      return (
          <section className= "box" id= "content-box-wrapper-hidden">
              <div className= "content-box">Content Box 5</div>
              <div className= "content-box">Content Box 6</div>
              <div className= "content-box">Content Box 7</div>
              <div className= "content-box">Content Box 8</div>
          </section>
      );
  }
}


//make a component that contains Header, Welcome, Title, ContentBox, CTAbtn, ContentBoxHidden
class App extends React.Component {
  render() {
      return(
          <div id= "root">
              <Header />
              <Welcome />
              <Title />
              <ContentBox />
              <CTAbtn />
          </div>
      );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React :)
//         </a>
//       </header>
//     </div>
//   );
// }
