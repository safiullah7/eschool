import CreateQuestionInput from './CreateQuestionInput';

interface Props{
  input: any
  setInput: any
  type: any
}


function TextQuestion({ input, setInput, type }:Props) {
  const handleChange = (e:any) =>{
    setInput({...input, questionType: type})
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  

  return (
    <>
      <CreateQuestionInput label="Enter Question Heading" handleChange={handleChange} name="questionText" />
    </>
  )
}

export default TextQuestion