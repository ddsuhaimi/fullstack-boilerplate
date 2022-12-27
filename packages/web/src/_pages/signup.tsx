import MinimalLayout from "@/components/MinimalLayout";
import { NextPageWithLayout } from "./_app";

const SignUp: NextPageWithLayout = () => {
  return <div>signup</div>;
};

SignUp.getLayout = function getLayout(page) {
  return <MinimalLayout>{page}</MinimalLayout>;
};

export default SignUp;
