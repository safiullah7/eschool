import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import React from 'react'

interface SelectItems {
  questionText: string
  a: string
  b: string
  c: string
}

function MultipleSelectItem({questionText, a, b, c}:SelectItems) {
  return (
    <div>
       <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">{questionText}</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox name="gilad" />} label={a}/>
          <FormControlLabel control={<Checkbox name="gilad" />} label={b}/>
          <FormControlLabel control={<Checkbox name="gilad" />} label={c}/>
        </FormGroup>
      </FormControl>
    </div>
  )
}

export default MultipleSelectItem