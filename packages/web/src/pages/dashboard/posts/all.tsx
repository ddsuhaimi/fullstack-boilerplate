import MainCard from "@/components/card.component/MainCard";
import DashboardLayout from "@/layouts/dashboard.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import React from "react";

type Props = {};

const AllPost: NextPageWithLayout = (props: Props) => {
  return <MainCard title="All post">all post</MainCard>;
};

AllPost.Layout = DashboardLayout;

export default AllPost;
