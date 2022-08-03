import React, { useEffect, useState } from 'react'
import { dummyData } from '../dummy'
import MultipleSelectItem from './ListQuestionTypes/MultipleSelectItem'
import SingleSelectItem from './ListQuestionTypes/SingleSelectItem'


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
    <div style={{margin: "10px 30px"}}>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '40px'}}>
          <div>
            {dummyData.map((item) => (
              item.questionType === 'singleselect' ? <><SingleSelectItem questionText={item.questionText} a={item.a} b={item.b} c={item.c} /></>
              : <><MultipleSelectItem questionText={item.questionText} a={item.a} b={item.b} c={item.c} /></>
            ))}   
          </div>
          <div>
            {items.questionType === 'singleselect' ? <><SingleSelectItem questionText={items.questionText} a={items.a} b={items.b} c={items.c} /></>
              : <><MultipleSelectItem questionText={items.questionText} a={items.a} b={items.b} c={items.c} /></>}
          </div>
       </div>
    </div>
  )
}

export default ListOfQuestions