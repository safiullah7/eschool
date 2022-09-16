import React from "react";
import {
  FormLabel,
  RadioGroup,
  FormControl,
  OutlinedInput,
  Box,
} from "@mui/material";
import RadioButton from "./RadioButton";

interface Props {
  single: any;
}

function SingleSelectItem({ single }: Props) {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        {single?.questionText}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
        {single?.options?.map((item: any, index: number) => (
          <Box key={index}>
            <RadioButton option={item?.optionText} />
          </Box>
        ))}
      </RadioGroup>
      <OutlinedInput placeholder="Please enter answer" size="small" />
    </FormControl>
  );
}

export default SingleSelectItem;
