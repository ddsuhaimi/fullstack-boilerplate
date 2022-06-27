import { Typography, Box, Container } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

const MainCard = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default MainCard;
