import { Button, InputLabel } from "@mui/material";
import React, { useState } from "react";
import CreateQuestionInput from "./CreateQuestionInput";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface Props {
  handleChange: any;
  index: any;
}
function Options({ handleChange, index }: Props) {
  const [selectedFile, setSelectedFile] = useState(false);

  return (
    <div>
      <div>
        <CreateQuestionInput
          label="Enter main text"
          name={`${index}optionText`}
          textarea={false}
          handleChange={handleChange}
        />
        <CreateQuestionInput
          label="Enter description (optional)"
          name={`${index}optionDescription`}
          textarea={false}
          handleChange={handleChange}
        />
        <InputLabel sx={{ fontSize: "14px", margin: "0px 0 1px 5px" }}>
          Enter image (optional)
        </InputLabel>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained" component="label">
            Upload
            <input
              hidden
              accept="image/*"
              type="file"
              // onChange={handleChange}
              name={`${index}optionImage`}
              onChange={handleChange}
              onClick={() => setSelectedFile(true)}
            />
          </Button>
          {selectedFile === true && (
            <CheckCircleOutlineIcon
              sx={{ color: "#09FE00", marginLeft: "5px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Options;
