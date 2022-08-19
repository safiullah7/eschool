import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Options from "./Options";

interface Props {
  question: any;
  setQuestion: any;
}

function QuestionTypes({ question, setQuestion }: Props) {
  const [numOption, setNumOption] = useState(1);
  const [options, setOptions] = useState({
    optionText: "",
    optionDesc: "",
    optionImg: "",
  });

  const handleClick = () => {
    setQuestion({
      ...question,
      options: [...question.options, options],
    });

    setOptions({ optionText: "", optionDesc: "", optionImg: "" });
  };

  return (
    <Box>
      {[...Array(numOption)].map((item, index) => (
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
          <Options options={options} setOptions={setOptions} />
        </Box>
      ))}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box onClick={handleClick}>
          <Button
            onClick={() => setNumOption(numOption + 1)}
            sx={{ width: "60px" }}
          >
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
        </Box>
        <Button
          onClick={() => {
            setNumOption(numOption - 1);
          }}
          disabled={numOption === 0}
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
