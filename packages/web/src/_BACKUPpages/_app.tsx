import "@/styles/reset.style.css";
import "@/styles/globals.style.css";
import "@fontsource/roboto/400.css";
import "@fontsource/public-sans/500.css";

import type { AppProps } from "next/app";
import MinimalLayout from "@/layouts/minimal.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import { wrapper } from "@/redux-toolkit/store";
// import MUIThemeProvider from "@/components/hocs.component/MUIThemeProvider";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ? Component.Layout : MinimalLayout;

  return (
    // <MUIThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </MUIThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
