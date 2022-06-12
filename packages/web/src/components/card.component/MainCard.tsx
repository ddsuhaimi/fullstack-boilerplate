import { Card, CardHeader, Typography, Divider, CardContent } from "@mui/material";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const MainCard = ({ children, title }: Props) => {
  return (
    <Card elevation={0} sx={{ minWidth: 275, borderRadius: 2 }}>
      <CardHeader title={<Typography variant="h4">{title}</Typography>} />
      <Divider />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default MainCard;
