
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';






const Comments= () => {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const feedback = useSelector((store) => store.commentsReducer);

    const[ getReply, setGetReply] = useState("");


    const handleSubmit = () => {
        dispatch (
            {
                type: "SET_COMMENTS",
                payload: getReply

            }
        )
        history.push('/review')
    }
 
 
return  (
    <div>
    <h2>Any comments you want to leave?</h2>
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
}

export default Comments;
