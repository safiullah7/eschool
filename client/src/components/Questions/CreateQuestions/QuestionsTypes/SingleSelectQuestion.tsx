import CreateQuestionInput from './CreateQuestionInput';

interface Props{
  input: any
  setInput: any
  type: any
}


function SingleSelectQuestion({ input, setInput, type}:Props) {
  const handleChange = (e:any) =>{
    setInput({...input, questionType: type, [e.target.name]: e.target.value })
  }
  

  return (
    <>
      <CreateQuestionInput label="Enter Question Heading" handleChange={handleChange} name="questionText" />
      <CreateQuestionInput label="A" handleChange={handleChange} name="a"/>
      <CreateQuestionInput label="B" handleChange={handleChange} name="b"/>
      <CreateQuestionInput label="C" handleChange={handleChange} name="c"/>
      <CreateQuestionInput label="Answer" handleChange={handleChange} name="answer"/>
    </>
  )
}

export default SingleSelectQuestion