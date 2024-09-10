import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';






function Comments() {
    const history = useHistory()    
    const nextPage = (event) =>{
     event.preventDefault();  
    console.log('comment function');
    history.push("./review")
    
    }
    function handleChange (event) {
 
 
return  (
    <>

    <h3>Do you have any comments?</h3>
    <input>put db input here from comments 1-5
    SELECT from feedback, comments</input>

    

<button onClick={nextPage}>Next Page</button>
</>
)
};
}; 

export default Comments;
