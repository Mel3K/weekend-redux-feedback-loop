import { useHistory } from "react-router-dom";


function Understanding() {
    const history = useHistory()
    const nextPage = (event) => {
        event.preventDefault();
        console.log('mel');
        history.push("/supported")

    }
    return (


        < button onClick = { nextPage } >Next Page</button>
        )
};



     
    
    export default Understanding;