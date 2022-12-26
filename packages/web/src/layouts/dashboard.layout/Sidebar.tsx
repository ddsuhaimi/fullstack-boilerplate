import * as React from "react";

// import routes from "src/constants/routes.constant";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const routes = [
  {
    label: "Home",
    path: "/dashboard",
  },
  {
    label: "Posts",
    path: "/dashboard/posts",
    subs: [
      { label: "Add Post", path: "/dashboard/posts/new" },
      { label: "All Post", path: "/dashboard/posts/all" },
    ],
  },
  {
    label: "Profile",
    path: "/dashboard/profile",
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
  },
];

const mainNavs = [
  {
    label: "Logout",
    path: "/logout",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Sidebar(props: Props) {
  const router = useRouter();
  const [openNavs, setOpenNavs] = React.useState<string[]>([]);

  const handleClick = (path: string) => {
    if (isSelectedPath(path)) {
      setOpenNavs((openNavs) => openNavs.filter((item) => item !== path));
    } else {
      setOpenNavs((openNavs) => [...openNavs, path]);
    }
  };

  const isSelectedPath = (path: string) => {
    let hasMatchRoute = false;
    openNavs.map((route) => {
      if (route.includes(path)) {
        hasMatchRoute = true;
      }
    });
    return hasMatchRoute;
  };
  return (
    <div>
      {/* <Toolbar />
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
      >
        {routes.map((item, index) => {
          if (item.subs) {
            return (
              <div key={index}>
                <ListItemButton key={index} onClick={() => handleClick(item.path)} selected={router.route === item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                  {isSelectedPath(item.path) ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={isSelectedPath(item.path)} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subs.map((child, childIndex) => {
                      return (
                        <Link href={child.path} key={childIndex}>
                          <ListItemButton sx={{ pl: 4 }} selected={router.route === child.path}>
                            <ListItemIcon>{child.icon}</ListItemIcon>
                            <ListItemText primary={child.label} />
                          </ListItemButton>
                        </Link>
                      );
                    })}
                  </List>
                </Collapse>
              </div>
            );
          } else {
            return (
              <Link href={item.path} key={index}>
                <ListItemButton selected={router.route === item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </Link>
            );
          }
        })}
      </List>
      <Divider />
      <List>
        {mainNavs.map((item, index) => (
          // <ListItem key={item.path} disablePadding>
          <Link href={item.path} key={index}>
            <ListItemButton selected={router.route === item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </Link>
          // </ListItem>
        ))}
      </List> */}
    </div>
  );
}
