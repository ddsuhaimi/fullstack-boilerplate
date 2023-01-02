"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux-toolkit/store";
// import { wrapper } from "@/redux-toolkit/store";

function GlobalProviders({ children }: { children: any }) {
  return (
    <>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </>
  );
}

// export default wrapper.withRedux(Providers);
export default GlobalProviders;
