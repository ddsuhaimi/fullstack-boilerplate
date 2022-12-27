import type { ReactElement } from "react";
import MinimalLayout from "@/components/MinimalLayout";

import { NextPageWithLayout } from "@/types/layout.types";

const Home: NextPageWithLayout = () => {
  return <div>hello world</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MinimalLayout>{page}</MinimalLayout>;
};

export default Home;
