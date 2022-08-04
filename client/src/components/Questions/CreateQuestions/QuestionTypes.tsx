import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import CreateQuestionInput from "./QuestionsTypes/CreateQuestionInput";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

interface Props {
  type: any;
}

function QuestionTypes() {
  const [option, setOption] = useState(1);
  console.log(option);
  return (
    <Box>
      <CreateQuestionInput
        label="Enter Question"
        name="questionText"
        textarea={true}
      />

      {[...Array(option)].map((item, index) => (
        <div key={index}>
          <CreateQuestionInput
            label={`Enter ${index + 1}th Option `}
            name="questionText"
            textarea={false}
          />
        </div>
      ))}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button onClick={() => setOption(option + 1)} sx={{ width: "60px" }}>
          <AddCircleOutlineIcon sx={{ color: "#2196f3" }} />
          <Typography
            sx={{
              color: "#2196f3",
              marginLeft: "2px",
              fontSize: "11px",
              width: "100%",
            }}
          >
            Add
          </Typography>
        </Button>
        <Button
          onClick={() => {
            setOption(option - 1);
          }}
          disabled={option === 0}
          sx={{ width: "80px", marginLeft: "10px" }}
        >
          <RemoveCircleOutlineIcon sx={{ color: "red" }} />
          <Typography
            sx={{ color: "red", marginLeft: "2px", fontSize: "11px" }}
          >
            Remove
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default QuestionTypes;
