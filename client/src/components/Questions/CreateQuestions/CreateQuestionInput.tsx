import { InputLabel, OutlinedInput } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  name: string;
  textarea: boolean;
}

function CreateQuestionInput({ label, name, textarea }: Props) {
  return (
    <>
      {!textarea ? (
        <>
          <InputLabel sx={{ fontSize: "14px", margin: "0px 0 1px 5px" }}>
            {label}
          </InputLabel>
          <OutlinedInput
            size="small"
            sx={{
              margin: "0px 0 5px 0",
              width: "500px",
              minHeight: "30px",
            }}
            minRows={1}
            multiline
          />
        </>
      ) : (
        <>
          <InputLabel sx={{ fontSize: "14px", margin: "10px 0 1px 0" }}>
            {label}
          </InputLabel>
          <OutlinedInput
            size="small"
            sx={{ margin: "0px 0 20px 0", width: "500px", minHeight: "50px" }}
            minRows={2}
            multiline
          />
        </>
      )}
    </>
  );
}

export default CreateQuestionInput;
