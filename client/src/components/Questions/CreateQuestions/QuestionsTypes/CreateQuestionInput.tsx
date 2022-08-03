import { TextField } from '@mui/material'
import React from 'react'

interface Props {
  label: string
  handleChange: any
  name: string
}

function CreateQuestionInput({label, handleChange, name}:Props) {
  return (
    <TextField id="demo-helper-text-misaligned-no-helper" label={label} sx={{margin: "10px 0"}} size="small" onChange={handleChange} name={name}/>
  )
}

export default CreateQuestionInput