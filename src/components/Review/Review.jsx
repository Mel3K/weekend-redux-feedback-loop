import { useHistory } from "react-router-dom";


function Review() {
    const history = useHistory()
    const nextPage = (event) => {
        event.preventDefault();
        console.log('review function ');
        history.push("/review")

    }
    return  (
        <>
    <p>
     Hello, Here's where we want to review our answers. </p>
     {/* <input>'we want to show all from the db inputs, SELECT from feedback
     </input> */}

     <button onSubmit={nextPage}>Submit Answers</button>
     
    
   
    </>
    )
    };
     
    
    export default Review;