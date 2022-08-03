import React from 'react'
import { dummyData } from '../dummy'
import MultipleSelectItem from './ListQuestionTypes/MultipleSelectItem'
import SingleSelectItem from './ListQuestionTypes/SingleSelectItem'

function ListOfQuestions() {
  return (
    <div style={{margin: "10px 30px"}}>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '40px'}}>
          {dummyData.map((item) => (
            item.questionType === 'singleselect' ? <><SingleSelectItem questionText={item.questionText} a={item.a} b={item.b} c={item.c} /></>
            : <><MultipleSelectItem questionText={item.questionText} a={item.a} b={item.b} c={item.c} /></>
          ))}   
       </div>
    </div>
  )
}

export default ListOfQuestions