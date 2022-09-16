import React from "react";
import { FormControl, FormLabel, OutlinedInput } from "@mui/material";

interface Props {
  single: any;
}

function TextInputItem({ single }: Props) {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        {single?.questionText}
      </FormLabel>
      <OutlinedInput
        placeholder="Please enter answer"
        size="small"
        sx={{ marginTop: "10px" }}
      />
    </FormControl>
  );
}

export default TextInputItem;
