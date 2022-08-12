import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import CreateQuestion from "../Questions/CreateQuestions/CreateQuestion";
import CreateTextArea from "./CreateTextArea";

interface Props {
  testData: any;
  setTestData: any;
  index: any;
}

function Section({ testData, setTestData, index }: Props) {
  const [create, setCreate] = useState(true);
  const handleChange = (e: any) => {
    setTestData({ ...testData, [e.target.name]: e.target.value });
  };

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
          <CreateTextArea
            label="Enter Section Name"
            textarea={false}
            handleChange={handleChange}
            name={`sectionName${index}`}
          />
          <CreateTextArea
            label="Enter Section Description"
            textarea={true}
            handleChange={handleChange}
            name={`sectionDesc${index}`}
          />
          <Button variant="contained" onClick={() => setCreate(!create)}>
            Create
          </Button>
        </form>
      ) : (
        <Box sx={{ padding: "30px 0px" }}>
          <Typography variant="h6" sx={{ fontSize: "15px", margin: "0" }}>
            Section Name:{" "}
            <span style={{ fontWeight: "bold" }}>{testData.sectionName}</span>
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Section Description:{" "}
            <span style={{ fontWeight: "bold" }}>{testData.sectionDesc1}</span>
          </Typography>
          <CreateQuestion handleChange={handleChange} />
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
