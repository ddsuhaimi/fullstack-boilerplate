import MainCard from "@/components/card.component/MainCard";
import { Button } from "@mui/material";
import React from "react";
import StatCard from "src/views/dashboard.views/StatCard/StatCard";
import DashboardLayout from "../../layouts/dashboard.layout";
import { NextPageWithLayout } from "../../types/layout.types";

type Props = {};

const Dashboard: NextPageWithLayout = (props: Props) => {
  return (
    <MainCard title="Dashboard">
      <StatCard />
    </MainCard>
  );
};

Dashboard.Layout = DashboardLayout;

export default Dashboard;
