import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router , Route }  from "react-router-dom";
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Review from '../Review/Review';
import Comments from '../Comments/Comments';
import { useHistory } from "react-router-dom";





function App() {



  return (
    <>
    <Router>
        <Route exact path="/">
          <Comments />
        </Route>
        <Route exact path="/supported">
          <Supported />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/understanding">
          <Review />
        </Route>
        <Route exact path="/comments">
          <Review />
        </Route>

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
          <h2>How are you feeling today? </h2>
          <p>Here I put the route to change the db</p>

         <button onClick={nextPage}>Next</button>


      <Understanding/>
      <h1>Do you feel supported</h1>
      <Supported/>
      <h1> Any comments you wish to share</h1>
      <Comments/>
      <h1>Review your selections</h1>
      <Review/>

   
    </div>
    </Router>
    </>
  );
}

export default App;
