import React from "react";
import { Box, InputLabel, OutlinedInput } from "@mui/material";

interface Props {
  label: string;
  textarea: boolean;
  name: string;
}

function CreateTextArea({ label, textarea, name }: Props) {
  return (
    <Box sx={{ marginBottom: "30px" }}>
      <InputLabel sx={{ fontSize: "15px" }}>{label}</InputLabel>
      {textarea ? (
        <OutlinedInput
          size="small"
          sx={{ width: "100%", minHeight: "100px" }}
          rows={5}
          multiline
          name={name}
        />
      ) : (
        <OutlinedInput size="small" sx={{ width: "100%" }} name={name} />
      )}
    </Box>
  );
}

export default CreateTextArea;
