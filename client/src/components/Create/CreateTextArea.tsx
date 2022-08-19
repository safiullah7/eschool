import React from "react";
import { Box, InputLabel, OutlinedInput } from "@mui/material";

interface Props {
  label: string;
  textarea: boolean;
  name: string;
  value: string;
  handleChange: any;
}

function CreateTextArea({ label, textarea, name, handleChange, value }: Props) {
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
          onChange={handleChange}
          value={value}
        />
      ) : (
        <OutlinedInput
          size="small"
          sx={{ width: "100%" }}
          name={name}
          onChange={handleChange}
          value={value}
        />
      )}
    </Box>
  );
}

export default CreateTextArea;
