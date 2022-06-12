import DashboardLayout from "@/layouts/dashboard.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import React from "react";

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const User: NextPageWithLayout = (props: Props) => {
  return <div>user page</div>;
};

User.Layout = DashboardLayout;

export default User;
