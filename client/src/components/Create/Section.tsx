import { Box, Button, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { useState } from "react";
import CreateQuestion from "../Questions/CreateQuestions/CreateQuestion";

function Section() {
  const [create, setCreate] = useState(true);

  return (
    <Box
      sx={{
        margin: "60px auto 0 auto",
        maxWidth: "700px",
      }}
    >
      {create ? (
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "50px 0px ",
          }}
        >
          <Box sx={{ marginBottom: "30px" }}>
            <InputLabel sx={{ fontSize: "15px" }}>
              Enter Section Name
            </InputLabel>
            <OutlinedInput
              size="small"
              sx={{ width: "100%" }}
              name="sectionName"
            />
            <InputLabel sx={{ fontSize: "15px" }}>
              Enter Section Description
            </InputLabel>
            <OutlinedInput
              size="small"
              sx={{ width: "100%", minHeight: "100px" }}
              rows={5}
              multiline
              name="sectionDesc"
              value=""
            />
          </Box>
          <Button variant="contained" onClick={() => setCreate(!create)}>
            Create
          </Button>
        </form>
      ) : (
        <Box sx={{ padding: "30px 0px" }}>
          <Typography variant="h6" sx={{ fontSize: "15px", margin: "0" }}>
            Section Name: <span style={{ fontWeight: "bold" }}></span>
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Section Description: <span style={{ fontWeight: "bold" }}></span>
          </Typography>
          <CreateQuestion />
          <Box>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", marginTop: "20px", fontWeight: "bold" }}
            >
              1st Question Created
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Section;
