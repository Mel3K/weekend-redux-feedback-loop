import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";

function Understanding() {
    const history = useHistory()
    const nextPage = (event) => {
        event.preventDefault();
        console.log('understanding function');
        history.push("/supported")

    
    return (
        <>
       <h3>Do you understand the material?</h3> 
       <input> <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
         <MenuItem value={4}>4</MenuItem>
         <MenuItem value={5}>5</MenuItem></input>     

        < button onClick = { nextPage } >Next Page</button>
        </>
        )
};
};
 
 
    export default Understanding;