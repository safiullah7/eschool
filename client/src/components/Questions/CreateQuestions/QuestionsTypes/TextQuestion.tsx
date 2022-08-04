import CreateQuestionInput from "./CreateQuestionInput";

interface Props {
  input: any;
  setInput: any;
  type: any;
}

function TextQuestion({ input, setInput, type }: Props) {
  return (
    <>
      <CreateQuestionInput
        label="Enter Question Heading"
        name="questionText"
        textarea={true}
      />
    </>
  );
}

export default TextQuestion;
