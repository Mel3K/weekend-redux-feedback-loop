import { useHistory } from "react-router-dom";



function Comments() {
    const history = useHistory()    
    const nextPage = (event) =>{
     event.preventDefault();  
    console.log('comment function');
    history.push("/review")
    
    }
return  (
    <>
    <h3>Do you have any comments?</h3>
    <input>put db input here from comments 1-5
    SELECT from feedback, comments</input>

    

<button onClick={nextPage}>Next Page</button>
</>
)
};
 

export default Comments;
