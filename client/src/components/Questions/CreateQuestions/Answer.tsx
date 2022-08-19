import React from "react";
import { InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  question: any;
  setQuestion: any;
  type: any;
}
function Answer({ question, setQuestion, type }: Props) {
  return (
    <Box sx={{ margin: "10px 0 20px 0" }}>
      <>
        <InputLabel sx={{ fontSize: "14px", margin: "0px 0 1px 5px" }}>
          Enter your answer
        </InputLabel>
        <OutlinedInput
          size="small"
          sx={{
            margin: "0px 0 5px 0",
            width: "500px",
            minHeight: "30px",
          }}
          minRows={1}
          multiline
          name="answer"
          onChange={(event) =>
            setQuestion({
              ...question,
              answer: event.target.value,
            })
          }
        />
      </>
      <Typography
        variant="body2"
        sx={{
          fontSize: "12px",
          margin: "-4px 0 0 5px",
          width: "400px",
          opacity: "0.7",
        }}
      >
        {type === "singleselect"
          ? "Enter correct option with a number (e.x: 2)"
          : "Enter correct options with numbers between commas (e.x: 1,3)"}
      </Typography>
    </Box>
  );
}

export default Answer;
