import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";




function Supported() {
    const history = useHistory()
    const nextPage = (event) =>{
    event.preventDefault();
    console.log('supported finction');
    history.push("/comments")
    
    return  (
    <p> 
         <input>Here we want you to select 1-5, from supported
    </input>
    
    </p>
    )
};


const handleChange = (event) => {
 

  <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="numberC ">select</InputLabel>
      <Select
        labelId="numberC"
       label="feeling supported?"
        onChange={handleChange}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
         <MenuItem value={4}>4</MenuItem>
         <MenuItem value={5}>5</MenuItem>
      </Select>
      <input>Here we want you to select 1-5, from supported
      </input>
      </FormControl>
  </Box>
};


};



 
  
    export default Supported;