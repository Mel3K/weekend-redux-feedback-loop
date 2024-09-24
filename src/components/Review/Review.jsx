
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
      <h2>Do you feel supported</h2>
      <form onSubmit= {handleSubmit} className="add-comments">
         <input
         data-testid="input"
                        type=''
                        vaule={getReply}
                        onChange={(event) => setGetReply(event.target.value)} />
                </form>
                <button onClick={handleSubmit} type='submit'>Next</button>
              
   </div>
   
    )
    };
     
    
    export default Review;