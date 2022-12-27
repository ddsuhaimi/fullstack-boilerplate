import "@/styles/reset.style.css";
import "@/styles/globals.style.css";
import "@fontsource/roboto/400.css";
import "@fontsource/public-sans/500.css";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

import type { AppProps } from "next/app";
import Providers from "@/components/providers";
// import { wrapper } from "@/redux-toolkit/store";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>;
}

// export default wrapper.withRedux(MyApp);
