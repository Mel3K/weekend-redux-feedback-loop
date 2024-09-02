import { useHistory } from "react-router-dom";


function Understanding() {
    const history = useHistory()
    const nextPage = (event) => {
        event.preventDefault();
        console.log('understanding function');
        history.push("/supported")

    }
    return (
        <>
       <h3>Do you understand the material?</h3> 
       <input>put db input from understanding here 1-5
       SELECT from feedback, understanding</input>
        

        < button onClick = { nextPage } >Next Page</button>
        </>
        )
};



     
    
    export default Understanding;