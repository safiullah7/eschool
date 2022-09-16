import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";

interface SelectItems {
  single: any;
}

function MultipleSelectItem({ single }: SelectItems) {
  return (
    <Box>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">{single?.questionText}</FormLabel>
        <FormGroup>
          {single?.options?.map((item: any, index: number) => (
            <FormControlLabel
              key={index}
              control={<Checkbox name="gilad" />}
              label={item?.optionText}
            />
          ))}
        </FormGroup>
        <OutlinedInput placeholder="Please enter answer" size="small" />
      </FormControl>
    </Box>
  );
}

export default MultipleSelectItem;
