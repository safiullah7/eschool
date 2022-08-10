import CreateTextArea from "./CreateTextArea";

interface Props {
  handleChange: any;
}

function Section({ handleChange }: Props) {
  return (
    <div className="container">
      <form
        action=""
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "60px auto 0 auto",
          maxWidth: "700px",
        }}
      >
        <CreateTextArea
          label="Enter Section Name"
          textarea={false}
          handleChange={handleChange}
          name="sectionName"
        />
        <CreateTextArea
          label="Enter Section description"
          textarea={true}
          handleChange={handleChange}
          name="sectionDesc"
        />
      </form>
    </div>
  );
}

export default Section;
