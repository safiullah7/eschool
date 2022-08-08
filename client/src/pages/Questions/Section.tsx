import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CreateTextArea from "../../components/Create/CreateTextArea";

interface Props {
  handleChange: any;
}

function Section({ handleChange }: Props) {
  return (
    <div className="container">
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "600", marginTop: "60px" }}
      >
        Create Your Question Section
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
          label="Enter Section Name"
          textarea={false}
          handleChange={handleChange}
          name="sectionName"
        />
        <CreateTextArea
          label="Enter Section description"
          textarea={true}
          handleChange={handleChange}
          name="sectionDesc"
        />
        <Link to="/create/section/question">
          <Button sx={{ width: "100%" }} variant="contained" size="large">
            Create Your Test Section
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default Section;
