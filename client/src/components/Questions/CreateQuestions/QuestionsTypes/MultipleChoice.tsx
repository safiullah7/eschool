import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import MultipleChoiceInput from './MultipleChoiceInput'

interface Props{
  handleOpen: any
}


function MultipleChoice({handleOpen}:Props) {
  const [input, setInput] = useState({ questionType: 'multipleChoice', questionText: '', a:'', b:'', c:'', answer: ''});
  const handleClick = (e:any) => {
    e.preventDefault()
  }
  const handleChange = (e:any) =>{
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  return (
    <Box sx={{maxWidth: "300px"}}>
      <form style={{display:"flex", flexDirection:"column"}}>
        <MultipleChoiceInput label="Enter Question Heading" handleChange={handleChange} name="questionText" />
        <MultipleChoiceInput label="A" handleChange={handleChange} name="a"/>
        <MultipleChoiceInput label="B" handleChange={handleChange} name="b"/>
        <MultipleChoiceInput label="C" handleChange={handleChange} name="c"/>
        <MultipleChoiceInput label="Answer" handleChange={handleChange} name="answer"/>
        <Button style={{marginTop: "10px"}} variant="contained" type="submit" onClick={(e:any)=>{ handleOpen(); handleClick(e)}}>Create</Button>
      </form>
    </Box>
  )
}

export default MultipleChoice