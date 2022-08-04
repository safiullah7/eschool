import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

interface Props {
  change: any;
  text: string;
  linkText: string;
  tabNum: string;
}

function HelperLink({ change, text, linkText, tabNum }: Props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography>{text} </Typography>
      <Link
        to="#"
        onClick={() => change("event", tabNum)}
        style={{
          color: "#01D986",
          fontWeight: "500",
          margin: "0 5px",
          cursor: "pointer",
        }}
      >
        {linkText}
      </Link>
    </Box>
  );
}

export default HelperLink;
