import React from "react";
// import Layout from "@/components/layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";

import { NextPageWithLayout } from "../_app";

type Props = {};

const Dashboard: NextPageWithLayout = (props: Props) => {
  return <div>Dashboard index</div>;
};

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
