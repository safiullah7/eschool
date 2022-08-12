import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TestName from "./TestName";
import Preview from "./Preview";
import SecondStep from "./SecondStep";

const steps = ["Enter Test Details", "Create Test", "See Preview"];

export default function CreateStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const [test, setTest] = useState({});

  const handleChange = (e: any) => {
    setTest({ ...test, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ width: "100%", padding: "50px 0" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Your Questions are Created
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset} variant="contained">
              Reset
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div>
            {activeStep === 0 && <TestName handleChange={handleChange} />}
          </div>
          <div>{activeStep === 1 && <SecondStep />}</div>
          <div>{activeStep === 2 && <Preview test={test} />}</div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              margin: "0 0 auto 0",
            }}
          >
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant="contained"
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext} variant="contained">
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
