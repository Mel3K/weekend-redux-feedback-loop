
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Review= () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const feedback = useSelector((store) => store.reviewReducer);

    const[getReply, setGetReply] = useState(0);


    const handleSubmit = () => {
        dispatch (
          {
            type: "SET_REVIEW",
            payload: getReply
          })
        history.push('/feelings')
      }
  

    return  (
        <div>
      <h2>Review your answers</h2>
      
         <ul> answer from feelings --#</ul>
         <ul> answer from understanding --#</ul>
         <ul> answer from supported --#</ul>
         <ul> answer from comments -- ""</ul>
         <ul> answer from Review -- all of the above</ul>

                <button onClick={handleSubmit} type='submit'>Home</button>
              
   </div>
   
    )
    };
     
    
    export default Review;