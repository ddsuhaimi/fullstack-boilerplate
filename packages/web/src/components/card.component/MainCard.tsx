import { Card, CardHeader, Typography, Divider, CardContent, CardActions, Button } from "@mui/material";
import { border } from "@mui/system";
import { title } from "process";
import React from "react";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const MainCard = ({ children, title }: Props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader title={<Typography variant="h3">{title}</Typography>} />
      <Divider />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default MainCard;
