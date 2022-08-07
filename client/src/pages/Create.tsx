import React, { useState } from "react";
import { Typography } from "@mui/material";
import CreateQuestion from "../components/Questions/CreateQuestions/CreateQuestion";
import CreateTextArea from "../components/Create/CreateTextArea";

function Create() {
  const [data, setData] = useState({});

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log(data);

  return (
    <div className="container">
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "600", marginTop: "60px" }}
      >
        Create Your Different Types Of Questions Easily
      </Typography>
      <form
        action=""
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "60px auto 0 auto",
          maxWidth: "700px",
        }}
      >
        <CreateTextArea
          label="Enter test name"
          textarea={false}
          handleChange={handleChange}
          name="testName"
        />
        <CreateTextArea
          label="Enter test description"
          textarea={true}
          handleChange={handleChange}
          name="testDescription"
        />
        <CreateQuestion
          data={data}
          setData={setData}
          handleChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Create;
