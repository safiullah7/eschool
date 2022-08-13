import React from "react";
import { Box } from "@mui/material";
import { dummyData } from "../dummy";
import MultipleSelectItem from "./ListQuestionTypes/MultipleSelectItem";
import SingleSelectItem from "./ListQuestionTypes/SingleSelectItem";
import TextInputItem from "./ListQuestionTypes/TextInputItem";

function ListOfQuestions() {
  return (
    <Box
      sx={{
        margin: "10px 30px",
        marginLeft: "40px",
        padding: "20px 0 40px 0",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "700px",
          rowGap: "30px",
        }}
      >
        {dummyData.map((item) => {
          if (item.questionType === "singleselect") {
            return (
              <>
                <SingleSelectItem
                  questionText={item.questionText}
                  a={item.a}
                  b={item.b}
                  c={item.c}
                />
              </>
            );
          } else if (item.questionType === "multiselect") {
            return (
              <>
                <MultipleSelectItem
                  questionText={item.questionText}
                  a={item.a}
                  b={item.b}
                  c={item.c}
                />
              </>
            );
          }
          return (
            <>
              <TextInputItem questionText={item.questionText} />
            </>
          );
        })}
      </Box>
    </Box>
  );
}

export default ListOfQuestions;
