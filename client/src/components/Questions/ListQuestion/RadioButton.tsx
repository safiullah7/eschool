import React from "react";
import { FormControlLabel, Radio } from "@mui/material";

interface Props {
  option: any;
}
function RadioButton({ option }: Props) {
  return <FormControlLabel value={option} control={<Radio />} label={option} />;
}

export default RadioButton;
