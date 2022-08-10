import { Typography } from "@mui/material";
import React from "react";
import CreateQuestion from "../Questions/CreateQuestions/CreateQuestion";

interface Props {
  handleChange: any;
  test: any;
  setTest: any;
}

function Question({ handleChange, test, setTest }: Props) {
  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          action=""
          style={{
            margin: "60px auto 0 auto",
          }}
        >
          <CreateQuestion
            handleChange={handleChange}
            test={test}
            setTest={setTest}
          />
        </form>
      </div>
    </div>
  );
}

export default Question;
