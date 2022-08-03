import { Box, Button, MenuItem, Modal, Select, Typography } from'@mui/material';
import React, { useState } from 'react'
import MultipleChoice from './QuestionsTypes/MultipleChoice';


const style = {
  position: 'absolute' as 'absolute',
  display: "flex",
  justifyContent: "center",
  flexDirection: 'column',
  top: '10%',
  left: '10%',
  right: '10%',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  minHeight:"40%",
};


function CreateQuestion() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [type, setType] = useState();

  const handleChange = (event:any) => {
    setType(event.target.value);
  };

  return (
    <div style={{margin: "40px 20px"}}>
      <Button onClick={handleOpen} variant="contained">Create New Question</Button>
      <Modal open={open} onClose={handleOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
          <Typography variant="h6">Choose type of question</Typography>
          <Select value={type} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} 
          sx={{ margin: "10px 0", minWidth: 250, height: "40px" }} >
            <MenuItem value="multipleselect">Multiple Select</MenuItem>
            <MenuItem value="multiplechoice">Multiple Choice</MenuItem>
            <MenuItem value="textinput">Input Text</MenuItem>
          </Select>
  
          {type==="textinput" && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Input Text
            </Typography>) 
          }
          {type==="multiplechoice" && (
            <MultipleChoice handleOpen={handleOpen}/>)
          }
          {type==="multipleselect" && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Multiple Select
            </Typography>) 
          }
        </Box>
      </Modal>
    </div>
  )
}

export default CreateQuestion