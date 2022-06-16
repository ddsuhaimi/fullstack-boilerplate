import MainCard from "@/components/card.component/MainCard";
import DashboardLayout from "@/layouts/dashboard.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import { Box, Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext } from "@/components/hocs.component/MUIThemeProvider";
import WidgetCard from "@/components/card.component/WidgetCard";

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Profile: NextPageWithLayout = (props: Props) => {
  return (
    <MainCard title="Profile">
      <WidgetCard title="Account Details">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, paddingRight: 2 },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField fullWidth required id="outlined-required" label="Required" defaultValue="Hello World" />
          </div>
          <div>
            <TextField fullWidth required id="outlined-required" label="Required" defaultValue="Hello World" />
          </div>
          <div>
            <TextField fullWidth required id="outlined-required" label="Required" defaultValue="Hello World" />
          </div>
        </Box>
      </WidgetCard>
    </MainCard>
  );
};

Profile.Layout = DashboardLayout;
export default Profile;
