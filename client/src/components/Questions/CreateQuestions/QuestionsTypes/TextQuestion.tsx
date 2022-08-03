import CreateQuestionInput from './CreateQuestionInput';

interface Props{
  input: any
  setInput: any
}


function TextQuestion({ input, setInput}:Props) {
  const handleChange = (e:any) =>{
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  

  return (
    <>
      <CreateQuestionInput label="Enter Question Heading" handleChange={handleChange} name="questionText" />
    </>
  )
}

export default TextQuestion