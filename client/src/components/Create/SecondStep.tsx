import { Box, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import Section from "./Section";

interface Props {
  data: any;
  setData: (data: any) => void;
}

function SecondStep({ data, setData }: Props) {
  const [addSection, setAddSection] = useState(1);
  const [newSection, setNewSection] = useState({
    sectionName: "",
    sectionDesc: "",
    questions: [],
  });

  const handleClick = () => {
    setData({ ...data, sections: [...data.sections, newSection] });
    setAddSection(addSection + 1);
    setNewSection({ sectionName: "", sectionDesc: "", questions: [] });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          margin: "50px 0 50px 0",
        }}
      >
        <Button onClick={handleClick} variant="contained">
          Add a Section
        </Button>
      </Box>
      <Box>
        {[...Array(addSection)].map((item, index) => (
          <Paper
            elevation={12}
            key={index}
            sx={{
              margin: "20px auto 0 auto",
              width: "60%",
            }}
          >
            <Section
              newSection={newSection}
              setNewSection={setNewSection}
              data={data}
              index={index}
            />
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default SecondStep;
