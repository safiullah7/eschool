import { FormHelperText } from '@mui/material';
import CreateQuestionInput from './CreateQuestionInput';

interface Props {
  input: any
  setInput: any
}


function MultipleSelectQuestion({ input, setInput}:Props) {
  const handleChange = (e:any) =>{
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  

  return (
    <>
      <CreateQuestionInput label="Enter Question Heading" handleChange={handleChange} name="questionText" />
      <CreateQuestionInput label="A" handleChange={handleChange} name="a"/>
      <CreateQuestionInput label="B" handleChange={handleChange} name="b"/>
      <CreateQuestionInput label="C" handleChange={handleChange} name="c"/>
      <CreateQuestionInput label="Answer" handleChange={handleChange} name="answer"/>
      <FormHelperText sx={{margin: '-5px 0 10px 0'}}>You can enter answer multiple e.x A,B</FormHelperText>
    </>
  )
}

export default MultipleSelectQuestion