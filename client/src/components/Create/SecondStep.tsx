import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import Section from "./Section";

function SecondStep() {
  const [addSection, setAddSection] = useState(1);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          margin: "50px 0 50px 0",
        }}
      >
        <Button
          onClick={() => setAddSection(addSection + 1)}
          variant="contained"
        >
          Add a Section
        </Button>
      </div>
      <div>
        {[...Array(addSection)].map((item, index) => (
          <Paper
            elevation={12}
            key={index}
            sx={{
              margin: "20px auto 0 auto",
              width: "60%",
            }}
          >
            <Section />
          </Paper>
        ))}
      </div>
    </div>
  );
}

export default SecondStep;
