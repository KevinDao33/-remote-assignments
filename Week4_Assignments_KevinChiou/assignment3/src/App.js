import logo from './/KevinDao.png';
import closeIcon from './/closeIcon.png';
import burgerIcon from './/hamburgerIcon.png';

import './App.css';
import React from 'react';

// make a component for the header using function component
const Header = () => {
  return(
      <header>
          <nav className = "nav">
              {/* make the left part of navbar */}
              <div className = "logo">
                  {/* src alt in the img tag tbd */}
                  <img className = "logo" alt="logo" src={logo}></img>
                  <h1>Kevin Dao's</h1>
              </div>

              {/* make the right part of navbar */}
              <ul className= "main">
                  {/* href in the a tag tbd */}
                  <li className="nav-item"><a href='#Item1'>Item 1</a></li>
                  <li className="nav-item"><a href='#Item2'>Item 2</a></li>
                  <li className="nav-item"><a href='#Item3'>Item 3</a></li>
                  <li className="nav-item"><a href='#Item4'>Item 4</a></li>
              </ul>

              {/* make the hamburger */}
              <div className="burger">
                 {/* for in the label tag tbd */}
                 <label>
                  {/* src, alt in img tag tbd */}
                  <img id= "burgerPic" alt="show menu" src={burgerIcon}></img>
                 </label> 
                  
                  {/* src in img tag tbd */}
                 <img id= "closeIcon" alt="close" src={closeIcon}></img>
                 <ul className= "burger menu">
                 {/* href in a tag tbd */}
                  <li className= "burger"><a className= "burgerA" href='#Item1'>Item1</a></li>
                  <li className= "burger"><a className= "burgerA" href='#Item2'>Item2</a></li>
                  <li className= "burger"><a className= "burgerA" href='#Item3'>Item3</a></li>
                  <li className= "burger"><a className= "burgerA" href='#Item4'>Item4</a></li>
                 </ul>
              </div>

          </nav>
      </header>
  );
}


//make a component for the welcome message using class component
class Welcome extends React.Component{
  render() {
      return (
          <main>
              <div className= "welcome-message">
                  <h1 className= "main-message">Welcome Message</h1>
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
  render() {
      return (
          <div className= "button">
              <button id= "CTA-button">Call to Action</button>
          </div>
      );
  }
}



//make a component for content box 5-8(which are hidden by default)
class ContentBoxHidden extends React.Component{
  render() {
      return (
          <section calssName= "box" id= "content-box-wrapper-hidden">
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
              <ContentBoxHidden />
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
