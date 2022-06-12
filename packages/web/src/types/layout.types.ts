import { NextPage } from "next";

export type NextPageWithLayout = NextPage & {
  Layout?: React.FunctionComponent<any>;
  getLayout?: (page: any) => any;
};
