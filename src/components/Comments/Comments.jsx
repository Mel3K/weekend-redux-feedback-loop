import { useHistory } from "react-router-dom";



function Comments() {
    const history = useHistory()    
    const nextPage = (event) =>{
     event.preventDefault();  
    console.log('mel');
    history.push("/review")
    
    }
return  (

<button onClick={nextPage}>Next Page</button>
)
};
 

export default Comments;
