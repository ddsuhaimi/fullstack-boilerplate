import { Typography, Box, Container } from "@mui/material";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const MainCard = ({ children, title }: Props) => {
  return (
    <Container>
      <Box sx={{ marginTop: 4, marginBottom: 4, background: "transparent", borderRadius: 2 }}>
        <Typography variant="h4">{title}</Typography>
      </Box>
      {children}
    </Container>
  );
};

export default MainCard;
