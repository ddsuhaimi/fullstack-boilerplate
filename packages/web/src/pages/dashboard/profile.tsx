import MainCard from "@/components/card.component/MainCard";
import DashboardLayout from "@/layouts/dashboard.layout";
import { NextPageWithLayout } from "@/types/layout.types";
import React from "react";
import StatCard from "src/views/dashboard.views/StatCard/StatCard";

type Props = {};

const Profile: NextPageWithLayout = (props: Props) => {
  return <MainCard title="Profile">profile</MainCard>;
};

Profile.Layout = DashboardLayout;
export default Profile;
