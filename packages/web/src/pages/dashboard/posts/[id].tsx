import MainCard from "@/components/card.component/MainCard";
import DashboardLayout from "@/layouts/dashboard.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import React from "react";

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Post: NextPageWithLayout = (props: Props) => {
  return <MainCard></MainCard>;
};
Post.Layout = DashboardLayout;
export default Post;
