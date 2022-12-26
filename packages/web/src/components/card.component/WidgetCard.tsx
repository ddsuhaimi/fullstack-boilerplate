type Props = {
  children: React.ReactNode;
  title: string;
};

const WidgetCard = (props: Props) => {
  return (
    // <Card elevation={0} sx={{ borderRadius: 2 }}>
    //   <CardHeader title={props.title}></CardHeader>
    //   <Divider />
    //   <CardContent>{props.children}</CardContent>
    // </Card>
    <div>
      <div title={props.title}></div>
      <div />
      <div>{props.children}</div>
    </div>
  );
};

export default WidgetCard;
