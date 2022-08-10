import React from "react";
import CreateTextArea from "./CreateTextArea";

interface Props {
  handleChange: any;
}

function TestName({ handleChange }: Props) {
  return (
    <div>
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
          label="Enter test name"
          textarea={false}
          handleChange={handleChange}
          name="name"
        />
        <CreateTextArea
          label="Enter test description"
          textarea={true}
          handleChange={handleChange}
          name="desc"
        />
      </form>
    </div>
  );
}

export default TestName;
