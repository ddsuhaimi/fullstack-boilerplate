import MainCard from "@/components/card.component/MainCard";
import DashboardLayout from "@/layouts/dashboard.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import { Box, Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext } from "@/components/hocs.component/MUIThemeProvider";
import WidgetCard from "@/components/card.component/WidgetCard";
import PageTitle from "@/components/card.component/PageTitle";

type Props = {};

function handleChange(event) {
  console.log(event.target.id);
  // if ((event.target.id = "tf1")) {
  //   console.log("ini tf1");
  // } else if ((event.target.id = "tf2")) {
  //   console.log("ini tf2");
  // }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Profile: NextPageWithLayout = (props: Props) => {
  return (
    <MainCard>
      <PageTitle title="Profile" />

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
            {/* komponen ini harus mengirimkan id saat event on change */}
            <TextField onChange={handleChange} fullWidth id="tf1" label="username" defaultValue="Cristiano Ronaldo" />
          </div>
          <div>
            <TextField onChange={handleChange} fullWidth id="tf2" label="password" defaultValue="Hello World" />
          </div>
          <div>
            <TextField onChange={handleChange} fullWidth id="tf3" label="email" defaultValue="Hello World" />
          </div>
        </Box>
      </WidgetCard>
    </MainCard>
  );
};

Profile.Layout = DashboardLayout;
export default Profile;
