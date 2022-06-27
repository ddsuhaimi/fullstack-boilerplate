import WidgetCard from "@/components/card.component/WidgetCard";
import { Card, CardContent, Grid } from "@mui/material";
import React from "react";

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StatCard = (props: Props) => {
  return (
    <Grid container spacing={2} flex="column" justifyContent="space-between">
      <Grid item xs={4}>
        <Card elevation={0}>
          <CardContent>content</CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card elevation={0}>
          <CardContent>content</CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card elevation={0}>
          <CardContent>content</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatCard;
