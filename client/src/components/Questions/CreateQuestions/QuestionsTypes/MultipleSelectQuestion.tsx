import { FormHelperText } from "@mui/material";
import CreateQuestionInput from "./CreateQuestionInput";

interface Props {
  input: any;
  setInput: any;
  type: any;
}

function MultipleSelectQuestion({ input, setInput, type }: Props) {
  return (
    <>
      <CreateQuestionInput
        label="Enter Question Heading"
        name="questionText"
        textarea={true}
      />
      <CreateQuestionInput label="A" name="a" textarea={false} />
      <CreateQuestionInput label="B" name="b" textarea={false} />
      <CreateQuestionInput label="C" name="c" textarea={false} />
      <CreateQuestionInput label="Answer" name="answer" textarea={false} />
      <FormHelperText sx={{ margin: "-5px 0 10px 0" }}>
        You can enter answer multiple e.x A,B
      </FormHelperText>
    </>
  );
}

export default MultipleSelectQuestion;
