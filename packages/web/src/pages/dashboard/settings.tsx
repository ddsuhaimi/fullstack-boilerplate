import MainCard from "@/components/card.component/MainCard";
import DashboardLayout from "@/layouts/dashboard.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import { useContext } from "react";
import WidgetCard from "@/components/card.component/WidgetCard";
import PageTitle from "@/components/card.component/PageTitle";

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Settings: NextPageWithLayout = (props: Props) => {
  // const colorMode = useContext(ColorModeContext);

  return (
    <MainCard>
      <PageTitle title="Settings" />

      <WidgetCard title="Appearance">
        {/* <Grid container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={12} md>
            Color Mode
          </Grid>
          <Grid item xs={12} md>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {colorMode.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Grid>
        </Grid> */}
      </WidgetCard>
    </MainCard>
  );
};
Settings.Layout = DashboardLayout;

export default Settings;
