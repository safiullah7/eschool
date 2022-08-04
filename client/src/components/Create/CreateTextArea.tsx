import { InputLabel, OutlinedInput } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  textarea: boolean;
}

function CreateTextArea({ label, textarea }: Props) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <InputLabel sx={{ fontSize: "15px" }}>{label}</InputLabel>
      {textarea ? (
        <OutlinedInput
          size="small"
          sx={{ width: "100%", minHeight: "100px" }}
          rows={5}
          multiline
        />
      ) : (
        <OutlinedInput size="small" sx={{ width: "100%" }} />
      )}
    </div>
  );
}

export default CreateTextArea;
