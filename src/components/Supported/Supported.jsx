import { useHistory } from "react-router-dom";



function Supported() {
    const history = useHistory()
    const nextPage = (event) =>{
    event.preventDefault();
    console.log('supported finction');
    history.push("/comments")
    }
    return  (
        <>
    <p>
     Hello, do you feel supported
    
    </p>
    <input>Here we want you to select 1-5, from supported
    </input>

    </>
    )
    };
     
    
    export default Supported;