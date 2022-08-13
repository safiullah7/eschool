import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import CreateQuestionInput from "./CreateQuestionInput";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Options from "./Options";

interface Props {
  type: any;
}
function QuestionTypes({ type }: Props) {
  const [option, setOption] = useState(1);

  return (
    <Box>
      <CreateQuestionInput
        label="Enter Question"
        name="questionText"
        textarea={true}
      />

      {[...Array(option)].map((item, index) => (
        <Box key={index} sx={{ marginBottom: "20px" }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              margin: "-4px 0 0 5px",
              width: "400px",
              opacity: "0.7",
              color: "#01d986",
              fontWeight: "600",
            }}
          >{`${index + 1}th Option `}</Typography>
          <Options index={index + 1} />
        </Box>
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
      <Box sx={{ margin: "10px 0 20px 0" }}>
        <CreateQuestionInput
          label="Enter Correct Answer"
          name="answer"
          textarea={false}
        />
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
    </Box>
  );
}

export default QuestionTypes;
