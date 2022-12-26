/* eslint-disable react/no-unknown-property */
import { title } from "process";
import React from "react";

type Props = {
  title: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PageTitle = ({ title }: Props) => {
  return (
    // <Box sx={{ marginTop: 4, marginBottom: 4, background: "transparent", borderRadius: 2 }}>
    //   <Typography variant="h4">{title}</Typography>
    // </Box>
    <div>
      <div>{title}</div>
    </div>
  );
};

export default PageTitle;
