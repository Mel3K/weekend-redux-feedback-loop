import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";



const Feeling = () => {
    const dispatch = useDispatch();
    const history = useHistory();


    const feedback = useSelector((store ) => store.feelingReducer);


    const [getReply, setGetReply] = useState(0)


const handleSubmit = () => {
    dispatch (
        {
            type: "SET_FEELING",
            payload: getReply
        })
history.push('/understanding')
        }


return (
    <>
    <div>
    <h2>How well are you understanding the content? </h2>
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


export default Feeling;


