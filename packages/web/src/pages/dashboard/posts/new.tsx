import MainCard from "@/components/card.component/MainCard";
import DashboardLayout from "@/layouts/dashboard.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import React from "react";

type Props = {};

const NewPost: NextPageWithLayout = (props: Props) => {
  return <MainCard title="New Post">new post</MainCard>;
};
NewPost.Layout = DashboardLayout;
export default NewPost;