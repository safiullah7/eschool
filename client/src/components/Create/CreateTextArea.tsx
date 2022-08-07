import { InputLabel, OutlinedInput } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  textarea: boolean;
  handleChange: any;
  name: string;
}

function CreateTextArea({ label, textarea, handleChange, name }: Props) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <InputLabel sx={{ fontSize: "15px" }}>{label}</InputLabel>
      {textarea ? (
        <OutlinedInput
          size="small"
          sx={{ width: "100%", minHeight: "100px" }}
          rows={5}
          multiline
          name={name}
          onChange={handleChange}
        />
      ) : (
        <OutlinedInput
          size="small"
          sx={{ width: "100%" }}
          name={name}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default CreateTextArea;
