import { Typography } from "@mui/material";

interface Props {
  title: string;
}

function TitleForm({ title }: Props) {
  return (
    <Typography
      variant="h3"
      sx={{
        fontWeight: "bold",
        fontSize: "26px",
        textAlign: "center",
        marginBottom: "40px",
      }}
    >
      {title}
    </Typography>
  );
}

export default TitleForm;
