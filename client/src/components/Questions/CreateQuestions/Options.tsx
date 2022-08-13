import { Box, Button, InputLabel } from "@mui/material";
import React, { useState } from "react";
import CreateQuestionInput from "./CreateQuestionInput";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface Props {
  index: any;
}
function Options({ index }: Props) {
  const [selectedFile, setSelectedFile] = useState(false);

  return (
    <Box>
      <CreateQuestionInput
        label="Enter main text"
        name={`optionText${index}`}
        textarea={false}
      />
      <CreateQuestionInput
        label="Enter description (optional)"
        name={`optionDescription${index}`}
        textarea={false}
      />
      <InputLabel sx={{ fontSize: "14px", margin: "0px 0 1px 5px" }}>
        Enter image (optional)
      </InputLabel>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Button variant="contained" component="label">
          Upload
          <input
            hidden
            accept="image/*"
            type="file"
            name={`optionImage${index}`}
            onClick={() => setSelectedFile(true)}
          />
        </Button>
        {selectedFile === true && (
          <CheckCircleOutlineIcon
            sx={{ color: "#09FE00", marginLeft: "5px" }}
          />
        )}
      </Box>
    </Box>
  );
}

export default Options;
