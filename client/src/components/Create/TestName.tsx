import { Box } from "@mui/material";
import React from "react";
import CreateTextArea from "./CreateTextArea";

function TestName() {
  return (
    <Box>
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
        <CreateTextArea label="Enter test name" textarea={false} name="name" />
        <CreateTextArea
          label="Enter test description"
          textarea={true}
          name="desc"
        />
      </form>
    </Box>
  );
}

export default TestName;
