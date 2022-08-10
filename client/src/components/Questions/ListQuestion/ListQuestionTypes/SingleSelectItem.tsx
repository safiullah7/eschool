import React from "react";
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormControl,
  OutlinedInput,
} from "@mui/material";

interface Props {
  questionText: string;
  a: string;
  b: string;
  c: string;
}

function SingleSelectItem({ questionText, a, b, c }: Props) {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        {questionText}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label={a} />
        <FormControlLabel value="male" control={<Radio />} label={b} />
        <FormControlLabel value="notprefer" control={<Radio />} label={c} />
      </RadioGroup>
      <OutlinedInput placeholder="Please enter answer" size="small" />
    </FormControl>
  );
}

export default SingleSelectItem;
