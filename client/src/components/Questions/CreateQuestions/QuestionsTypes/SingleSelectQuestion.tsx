import CreateQuestionInput from "./CreateQuestionInput";

interface Props {
  input: any;
  setInput: any;
  type: any;
}

function SingleSelectQuestion({ input, setInput, type }: Props) {
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
    </>
  );
}

export default SingleSelectQuestion;
