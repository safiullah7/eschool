import React from "react";
import { Box, Typography } from "@mui/material";
import SingleSelectItem from "../Questions/ListQuestion/SingleSelectItem";
import TextInputItem from "../Questions/ListQuestion/TextInputItem";
import MultipleSelectItem from "../Questions/ListQuestion/MultipleSelectItem";

interface Props {
  data: any;
}
function Preview({ data }: Props) {
  return (
    <Box
      sx={{
        margin: "10px 30px",
        marginLeft: "40px",
        padding: "60px 0 40px 0",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ fontSize: "20px" }}>
          Test Name: <span style={{ fontWeight: "bold" }}>{data?.name}</span>
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "20px" }}>
          Test Description:{" "}
          <span style={{ fontWeight: "bold" }}>{data?.desc}</span>
        </Typography>
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <Typography variant="h6" sx={{ fontSize: "19px", fontWeight: "bold" }}>
          List of Sections:
        </Typography>
        {data?.sections?.map((item: any, index: number) => (
          <Box sx={{ marginBottom: "40px" }} key={index}>
            <Typography
              variant="h6"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Section {index + 1}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              Name: {data?.sections[index]?.sectionName}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              Description: {data?.sections[index]?.sectionDesc}
            </Typography>
            <Box sx={{ marginTop: "20px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Questions
              </Typography>
              {data?.sections[index]?.questions?.map(
                (single: any, num: number) => {
                  if (
                    data?.sections[index]?.questions[num]?.questionType ===
                    "singleselect"
                  ) {
                    return (
                      <>
                        <Box sx={{ marginTop: "20px" }}>
                          <SingleSelectItem single={single} />
                        </Box>
                      </>
                    );
                  }
                  if (
                    data?.sections[index]?.questions[num]?.questionType ===
                    "multiselect"
                  ) {
                    return (
                      <>
                        <Box sx={{ marginTop: "20px" }}>
                          <MultipleSelectItem single={single} />
                        </Box>
                      </>
                    );
                  }
                  if (
                    data?.sections[index]?.questions[num]?.questionType ===
                    "textinput"
                  ) {
                    return (
                      <>
                        <Box sx={{ marginTop: "20px" }}>
                          <TextInputItem single={single} />
                        </Box>
                      </>
                    );
                  }
                }
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Preview;
