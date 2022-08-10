import {
  FormControl,
  FormControlLabel,
  FormLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";

interface Props {
  questionText: string;
}

function TextInputItem({ questionText }: Props) {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        {questionText}
      </FormLabel>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue=""
        size="small"
      />
      <OutlinedInput placeholder="Please enter answer" size="small" />
    </FormControl>
  );
}

export default TextInputItem;
