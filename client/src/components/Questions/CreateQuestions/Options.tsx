import { Button, InputLabel } from "@mui/material";
import React, { useState } from "react";
import CreateQuestionInput from "./CreateQuestionInput";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function Options() {
  const [selectedFile, setSelectedFile] = useState(false);

  return (
    <div>
      <div>
        <CreateQuestionInput
          label="Enter main text"
          name="questionText"
          textarea={false}
        />
        <CreateQuestionInput
          label="Enter description (optional)"
          name="questionText"
          textarea={false}
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
              onChange={(e: any) => setSelectedFile(true)}
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
