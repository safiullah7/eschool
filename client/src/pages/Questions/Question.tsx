import { Typography } from "@mui/material";
import React from "react";
import CreateQuestion from "../../components/Questions/CreateQuestions/CreateQuestion";

interface Props {
  handleChange: any;
}

function Question({ handleChange }: Props) {
  return (
    <div className="container">
      <Typography variant="h6" sx={{ marginTop: "60px" }}>
        Section Name: xyz
      </Typography>
      <Typography variant="h6">Section Description: xyz</Typography>
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
        <CreateQuestion handleChange={handleChange} />
      </form>
    </div>
  );
}

export default Question;
