type Props = {
  children?: React.ReactNode;
};

const MainCard = ({ children }: Props) => {
  return <div>{children}</div>;
  // return <Container>{children}</Container>;
};

export default MainCard;
