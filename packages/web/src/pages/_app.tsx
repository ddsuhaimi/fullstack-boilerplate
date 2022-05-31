import "@/styles/reset.style.css";
import "@fontsource/roboto/400.css";
import "@/styles/globals.style.css";

import type { AppProps } from "next/app";
import MinimalLayout from "@/layouts/minimal.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import { wrapper } from "@/redux-toolkit/store";
import DashboardLayout from "@/layouts/dashboard.layout";
import { useEffect } from "react";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);
  const Layout = Component.Layout ? Component.Layout : DashboardLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
