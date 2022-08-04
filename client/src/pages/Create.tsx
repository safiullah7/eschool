import React from "react";
import {
  FormLabel,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import CreateQuestion from "../components/Questions/CreateQuestions/CreateQuestion";
import CreateTextArea from "../components/Create/CreateTextArea";

function Create() {
  return (
    <div className="container">
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "600", marginTop: "60px" }}
      >
        Create Your Different Types Of Questions Easily
      </Typography>
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
        <CreateTextArea label="Enter test name" textarea={false} />
        <CreateTextArea label="Enter test description" textarea={true} />
        <CreateQuestion />
      </form>
    </div>
  );
}

export default Create;
