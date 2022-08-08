import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import CreateTextArea from "../../components/Create/CreateTextArea";
import { Link } from "react-router-dom";

interface Props {
  handleChange: any;
}

function Create({ handleChange }: Props) {
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
          name="name"
        />
        <CreateTextArea
          label="Enter test description"
          textarea={true}
          handleChange={handleChange}
          name="desc"
        />

        <Link to="/create/section">
          <Button sx={{ width: "100%" }} variant="contained" size="large">
            Create Your Test Name
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default Create;
