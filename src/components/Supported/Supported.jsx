import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';





const Supported = () => {
  const dispatch = useDispatch();
    const history = useHistory();

    const feedback = useSelector((store) =>store.supportedReducer);

    const [getReply, setGetReply] = useState(0);

    const handleSubmit = () => {
      dispatch (
        {
          type: "SET_SUPPORTED",
          payload: getReply
        })
      history.push('/comments')
    }

    
    return  (
    <div>
      <h2>Do you want to share any comments</h2>
      <form onSubmit= {handleSubmit} className="add-comments">
         <input
         data-testid="input"
                        type=''
                        vaule={getReply}
                        onChange={(event) => setGetReply(event.target.value)} />
                </form>
                <button onClick={handleSubmit} type='submit'>Next</button>
              
   </div>
    )

}


  // <Box sx={{ minWidth: 120 }}>
  //   <FormControl fullWidth>
  //     <InputLabel id="numberC ">select</InputLabel>
  //     <Select
  //       labelId="numberC"
  //      label="feeling supported?"
  //       onChange={handleChange}
  //     >
  //       {/* <MenuItem value={1}>1</MenuItem>
//         <MenuItem value={2}>2</MenuItem>
//         <MenuItem value={3}>3</MenuItem>
//          <MenuItem value={4}>4</MenuItem>
//          <MenuItem value={5}>5</MenuItem>
//       </Select>
//       <input>Here we want you to select 1-5, from supported
//       </input>
//       </FormControl>
//   </Box>
// }; */}






 
  
    export default Supported;