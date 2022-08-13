import React from "react";
import { Box } from "@mui/material";


function Preview() {
  return (
    <Box
      sx={{
        margin: "10px 30px",
        marginLeft: "40px",
        padding: "20px 0 40px 0",
      }}
    >
      {/* <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "700px",
            rowGap: "30px",
          }}
        >
          <div>
            {test.questionType === "singleselect" && (
              <SingleSelectItem
                questionText={test.questionText}
                a={test.optionText1}
                b={test.optionText2}
                c={test.optionText3}
              />
            )}
          </div>
          <div>
            {test.questionType === "multiselect" && (
              <MultipleSelectItem
                questionText={test.questionText}
                a={test.optionText1}
                b={test.optionText2}
                c={test.optionText3}
              />
            )}
          </div>
          <div>
            {test.questionType === "textInput" && (
              <TextInputItem questionText={test.questionText} />
            )}
          </div>
        </div>
      </div> */}
    </Box>
  );
}

export default Preview;
