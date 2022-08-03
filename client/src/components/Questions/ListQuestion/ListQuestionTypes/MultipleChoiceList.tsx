import { FormControl } from '@mui/material'
import React from 'react'
import { dummyData } from '../../dummy';
import ItemMultiple from './ItemMultiple';

function MultipleChoiceList() {

  return (
    <FormControl>
      {dummyData.map((item) => (
        <>
          <ItemMultiple questionText={item.questionText} a={item.a} b={item.b} c={item.c} />
        </>
      ))}
      
    </FormControl>
  )
}

export default MultipleChoiceList