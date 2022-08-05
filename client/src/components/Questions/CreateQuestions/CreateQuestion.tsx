import {
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import QuestionTypes from "./QuestionTypes";
import TextQuestion from "./TextQuestion";

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

function CreateQuestion() {
  const [type, setType] = useState();
  const [input, setInput] = useState({
    questionType: "",
    questionText: "",
    a: "",
    b: "",
    c: "",
    answer: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const handleChange = (event: any) => {
    setType(event.target.value);
  };
  const handleClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <div style={{ margin: "40px auto 0 auto" }}>
      <Button onClick={handleOpen} variant="contained" size="large">
        Create Your Question Section
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
            sx={{ margin: "10px 0", minWidth: 250, height: "40px" }}
          >
            <MenuItem value="multiselect">Multiple Select</MenuItem>
            <MenuItem value="singleselect">Multiple Choice</MenuItem>
            <MenuItem value="textinput">Input Text</MenuItem>
          </Select>
          <Box sx={{ maxWidth: "300px" }}>
            <form style={{ display: "flex", flexDirection: "column" }}>
              {type === "textinput" && <TextQuestion />}
              {type === "singleselect" && <QuestionTypes type="singleselect" />}
              {type === "multiselect" && <QuestionTypes type="multiselect" />}
              {type && (
                <Button
                  style={{ marginTop: "10px" }}
                  variant="contained"
                  type="submit"
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
    </div>
  );
}

export default CreateQuestion;
