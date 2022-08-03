import React, { useEffect, useState } from 'react'
import { dummyData } from '../dummy'
import MultipleSelectItem from './ListQuestionTypes/MultipleSelectItem'
import SingleSelectItem from './ListQuestionTypes/SingleSelectItem'
import TextInputItem from './ListQuestionTypes/TextInputItem'


interface Items {
  questionType:string
  a:string
  b:string
  c:string
  questionText:string
  answer:string
}
function ListOfQuestions() {
  //@ts-ignore
  const [items, setItems] = useState<Items>({})

  useEffect(() => {
    //@ts-ignore
    const items = JSON.parse(localStorage.getItem('questions'))
    if (items) {
      //@ts-ignore
     setItems(items);
    }
  }, [items]);

  return (
    <div style={{margin: "10px 30px", marginLeft: '40px', padding:"20px 0 40px 0"}}>
        <div >
          <div style={{display: 'flex', flexDirection: 'column' }}>
            {dummyData.map((item) => (
              item.questionType === 'singleselect' && <><SingleSelectItem questionText={item.questionText} a={item.a} b={item.b} c={item.c} /></>
              ))} 
            {dummyData.map((item) => (
              item.questionType === 'multiselect' && <><MultipleSelectItem questionText={item.questionText} a={item.a} b={item.b} c={item.c} /></>
              ))} 
            {dummyData.map((item) => (
                item.questionType === 'inputtext' && <><TextInputItem questionText={item.questionText} /></>
            ))}  
          </div>

          <div>
          {items.questionType === 'singleselect' && <><SingleSelectItem questionText={items.questionText} a={items.a} b={items.b} c={items.c} /></>} 
            {items.questionType === 'multiselect' && <><MultipleSelectItem questionText={items.questionText} a={items.a} b={items.b} c={items.c} /></>
            } 
            {items.questionType === 'inputtext' && <><TextInputItem questionText={items.questionText} /></>}  
          </div>
       </div>
    </div>
  )
}

export default ListOfQuestions