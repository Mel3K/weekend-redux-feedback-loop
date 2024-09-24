import React from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router , Route }  from "react-router-dom";
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Review from '../Review/Review';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';






function App() {
 

  return (
    <Router>
    <div className ='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    
   
        <Route exact path="/">
          <Feeling />
          <hr />  
          {/* this <hr/ adds a line */}
        </Route>

        <Route exact path="/understanding">
          <Understanding />
          <hr />
        </Route>



        <Route exact path="/supported">
          <Supported />
          <hr />
        </Route>

        <Route exact path="/review">
          <Review />
          <hr/ >
        </Route>
       
        <Route exact path="/comments">
          <Comments />
          <hr />
        </Route>



    
     
  

    </div>
    </Router>
    
  );
}

export default App;
