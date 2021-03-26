import TinderCard from 'react-tinder-card';
import './App.css';
import Header from "./Header.js"
import TinderCards from "./TinderCards.js"
import SwipeButtons from "./SwipeButtons.js"
function App() {
  return (
    // BEM class naming convention
    <div className="app">
      {/* <h1> Let's build the mern tinder clone</h1> */}

        <Header />
       <TinderCards />
       <SwipeButtons />
       
    </div>
  );
}

export default App;
