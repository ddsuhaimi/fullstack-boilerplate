import MainCard from "@/components/card.component/MainCard";
import DashboardLayout from "@/layouts/dashboard.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import React from "react";

type Props = {};

const Post: NextPageWithLayout = (props: Props) => {
  return <MainCard></MainCard>;
};
Post.Layout = DashboardLayout;
export default Post;
