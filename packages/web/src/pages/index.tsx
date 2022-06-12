import MinimalLayout from "@/layouts/minimal.layout";
import { NextPageWithLayout } from "@/types/layout.types";

const Home: NextPageWithLayout = () => {
  return <div>hello</div>;
};

Home.Layout = MinimalLayout;

export default Home;
