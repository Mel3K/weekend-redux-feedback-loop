import { useHistory } from "react-router-dom";
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';

const Understanding = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const feedback = useSelector((store ) => store.understandingReducer)

    const [getReply, setGetReply] = useState(0)

    const handleSubmit = () => {
     dispatch (
        {
            type: "SET_UNDERSTANDING",
            payload: getReply

        })
        history.push('/supported')
    }
    

    
    return (
        <>
        <div>
        <h2>How do you understand the material? </h2>
        <form onSubmit= {handleSubmit} className= "add-feedback">
    
        <input
                            data-testid="input"
                            type='number'
                            vaule={getReply}
                            onChange={(event) => setGetReply(event.target.value)} />
                    </form>
                    <button onClick={handleSubmit} type='submit'>Next</button>
                    </div>
            </>
        )
    }
 
 
    export default Understanding;