import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  Layout?: React.FunctionComponent<any>;
  getLayout?: (page: any) => any;
};
