import MainCard from "@/components/card.component/MainCard";
import DashboardLayout from "@/layouts/dashboard.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext } from "@/components/hocs.component/MUIThemeProvider";

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Profile: NextPageWithLayout = (props: Props) => {
  const colorMode = useContext(ColorModeContext);
  return (
    <MainCard title="Profile">
      <Box>profile</Box>
      <Button
        onClick={() => {
          colorMode.toggleColorMode();
        }}
      >
        test
      </Button>
    </MainCard>
  );
};

Profile.Layout = DashboardLayout;
export default Profile;
