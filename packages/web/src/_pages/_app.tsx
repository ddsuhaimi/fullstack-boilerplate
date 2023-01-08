import "@/styles/reset.style.css";
import "@/styles/globals.style.css";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

import type { AppProps } from "next/app";
import GlobalProviders from "src/providers/GlobalProviders";
// import { wrapper } from "@/redux-toolkit/store";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return <GlobalProviders>{getLayout(<Component {...pageProps} />)}</GlobalProviders>;
}

// export default wrapper.withRedux(MyApp);
