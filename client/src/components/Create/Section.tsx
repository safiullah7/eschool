import {
  Box,
  Button,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CreateQuestion from "../Questions/CreateQuestions/CreateQuestion";

interface Props {
  newSection: any;
  setNewSection: any;
  data: any;
  index: number;
}
function Section({ newSection, setNewSection, data, index }: Props) {
  const [create, setCreate] = useState(true);
  const handleClick = () => {
    setCreate(!create);
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
          <Box sx={{ marginBottom: "30px" }}>
            <InputLabel sx={{ fontSize: "15px" }}>
              Enter Section Name
            </InputLabel>
            <OutlinedInput
              size="small"
              sx={{ width: "100%" }}
              name="sectionName"
              onChange={(event) =>
                setNewSection({
                  ...newSection,
                  sectionName: event.target.value,
                })
              }
            />
            <InputLabel sx={{ fontSize: "15px" }}>
              Enter Section Description
            </InputLabel>
            <OutlinedInput
              size="small"
              sx={{ width: "100%", minHeight: "100px" }}
              rows={5}
              multiline
              name="sectionDesc"
              onChange={(event) =>
                setNewSection({
                  ...newSection,
                  sectionDesc: event.target.value,
                })
              }
            />
          </Box>
          <Button variant="contained" onClick={handleClick}>
            Create
          </Button>
        </form>
      ) : (
        <Box sx={{ padding: "30px 0px" }}>
          <Typography variant="h6" sx={{ fontSize: "15px", margin: "0" }}>
            Section Name:{" "}
            <span style={{ fontWeight: "bold" }}>
              {data.sections[index]?.sectionName || newSection.sectionName}
            </span>
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Section Description:{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {data.sections[index]?.sectionDesc || newSection.sectionDesc}
            </span>
          </Typography>
          <CreateQuestion
            newSection={newSection}
            setNewSection={setNewSection}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", marginTop: "20px", fontWeight: "bold" }}
            >
              {data.sections[index]?.questions?.map(
                (item: any, num: number) => (
                  <Box key={num}>
                    {num + 1}-Question:{" "}
                    {data.sections[index]?.questions[num]?.questionText}
                  </Box>
                )
              ) ||
                newSection.questions?.map((item: any, num: number) => (
                  <Box key={num}>
                    {num + 1}-Question:{" "}
                    {newSection.questions[num]?.questionText}
                  </Box>
                ))}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Section;
