import { Box, Button, InputLabel, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface Props {
  options: any;
  setOptions: (options: any) => void;
}

function Options({ options, setOptions }: Props) {
  const [selectedFile, setSelectedFile] = useState(false);

  return (
    <Box>
      <>
        <InputLabel sx={{ fontSize: "14px", margin: "0px 0 1px 5px" }}>
          Enter option text
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
          name="optionText"
          onChange={(event) =>
            setOptions({
              ...options,
              optionText: event.target.value,
            })
          }
        />
      </>
      <>
        <InputLabel sx={{ fontSize: "14px", margin: "0px 0 1px 5px" }}>
          Enter option desctiption (optional)
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
          name="optionDesc"
          onChange={(event) =>
            setOptions({
              ...options,
              optionDesc: event.target.value,
            })
          }
        />
      </>
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
            name="optionImg"
            onChange={(event) => {
              setOptions({
                ...options,
                optionImg: event.target.value,
              });
              setSelectedFile(true);
            }}
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
