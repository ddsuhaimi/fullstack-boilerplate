import MainCard from "@/components/card.component/MainCard";
import DashboardLayout from "@/layouts/dashboard.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import React from "react";

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AllPost: NextPageWithLayout = (props: Props) => {
  return <MainCard title="All post">all post</MainCard>;
};

AllPost.Layout = DashboardLayout;

export default AllPost;
