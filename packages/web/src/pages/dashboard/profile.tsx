import MainCard from "@/components/card.component/MainCard";
import DashboardLayout from "@/layouts/dashboard.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import { Box } from "@mui/material";
import React from "react";

type Props = {};

const Profile: NextPageWithLayout = (props: Props) => {
  return (
    <MainCard title="Profile">
      <Box>profile</Box>
    </MainCard>
  );
};

Profile.Layout = DashboardLayout;
export default Profile;
