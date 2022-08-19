import { Box } from "@mui/material";
import React from "react";
import CreateTextArea from "./CreateTextArea";

interface Props {
  data: any;
  setData: any;
}
function TestName({ data, setData }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <Box
      sx={{
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
        name="name"
        handleChange={handleChange}
        value={data.name}
      />
      <CreateTextArea
        label="Enter test description"
        textarea={true}
        name="desc"
        handleChange={handleChange}
        value={data.decs}
      />
    </Box>
  );
}

export default TestName;
