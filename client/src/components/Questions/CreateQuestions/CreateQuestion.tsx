import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Answer from "./Answer";
import QuestionTypes from "./QuestionTypes";

const style = {
  position: "absolute" as "absolute",
  display: "block",
  flexDirection: "column",
  top: "10%",
  left: "10%",
  height: "80%",
  overflowY: "auto",
  right: "10%",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  newSection: any;
  setNewSection: (data: any) => void;
}

function CreateQuestion({ newSection, setNewSection }: Props) {
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [question, setQuestion] = useState({
    questionType: "",
    questionText: "",
    options: [],
    answer: "",
  });

  const handleClick = (e: any) => {
    e.preventDefault();

    setNewSection({
      ...newSection,
      questions: [...newSection.questions, question],
    });
    setQuestion({
      questionType: "",
      questionText: "",
      options: [],
      answer: "",
    });
  };

  const handleChange = (e: any) => {
    setType(e.target.value);
    setQuestion({
      ...question,
      questionType: e.target.value,
    });
  };

  return (
    <Box sx={{ margin: "40px 0 0 0" }}>
      <Button onClick={handleOpen} variant="contained" size="small">
        Create Your Question
      </Button>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6">Choose type of question</Typography>
          <Select
            value={type}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ margin: "10px 0", minWidth: 500, height: "40px" }}
            name="questionType"
          >
            <MenuItem value="multiselect">Multiple Select</MenuItem>
            <MenuItem value="singleselect">Multiple Choice</MenuItem>
            <MenuItem value="textinput">Input Text</MenuItem>
          </Select>
          <Box sx={{ maxWidth: "300px" }}>
            <form style={{ display: "flex", flexDirection: "column" }}>
              {type && (
                <>
                  <InputLabel
                    sx={{ fontSize: "14px", margin: "0px 0 1px 5px" }}
                  >
                    Enter your question text
                  </InputLabel>
                  <OutlinedInput
                    size="small"
                    sx={{
                      margin: "0px 0 20px 0",
                      width: "500px",
                      minHeight: "50px",
                    }}
                    minRows={2}
                    multiline
                    name="questionText"
                    onChange={(event) =>
                      setQuestion({
                        ...question,
                        questionText: event.target.value,
                      })
                    }
                  />
                </>
              )}
              {["singleselect", "multiselect"].includes(type) && (
                <>
                  <QuestionTypes
                    question={question}
                    setQuestion={setQuestion}
                  />
                  <Answer
                    type={type}
                    question={question}
                    setQuestion={setQuestion}
                  />
                </>
              )}
              {type && (
                <Button
                  style={{ marginTop: "10px" }}
                  variant="contained"
                  onClick={(e: any) => {
                    handleOpen();
                    handleClick(e);
                  }}
                >
                  Create
                </Button>
              )}
            </form>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default CreateQuestion;
