import CreateQuestionInput from "./CreateQuestionInput";

interface Props {
  handleChange: any;
}

function TextQuestion({ handleChange }: Props) {
  return (
    <>
      <CreateQuestionInput
        label="Enter Question Heading"
        name="questionText"
        textarea={true}
        handleChange={handleChange}
      />
    </>
  );
}

export default TextQuestion;
