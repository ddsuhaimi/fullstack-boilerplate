import "@/styles/reset.style.css";
import "@fontsource/roboto/400.css";
import "@/styles/globals.style.css";

import type { AppProps } from "next/app";
import MinimalLayout from "@/layouts/minimal.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import { wrapper } from "@/redux-toolkit/store";
import DashboardLayout from "@/layouts/dashboard.layout";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ? Component.Layout : MinimalLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
