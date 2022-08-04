import React from "react";
import { dummyData } from "../dummy";
import MultipleSelectItem from "./ListQuestionTypes/MultipleSelectItem";
import SingleSelectItem from "./ListQuestionTypes/SingleSelectItem";
import TextInputItem from "./ListQuestionTypes/TextInputItem";

function ListOfQuestions() {
  return (
    <div
      style={{
        margin: "10px 30px",
        marginLeft: "40px",
        padding: "20px 0 40px 0",
      }}
    >
      <div>
        <div
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
        </div>
      </div>
    </div>
  );
}

export default ListOfQuestions;
