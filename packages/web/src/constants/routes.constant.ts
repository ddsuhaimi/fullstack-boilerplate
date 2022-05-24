const routes = [
  {
    label: "Home",
    path: "/dashboard",
  },
  {
    label: "Post",
    subs: [
      {
        label: "New Post",
        path: "/dashboard/posts/new",
      },
      {
        label: "All Posts",
        path: "/dashboard/posts/all",
      },
    ],
  },

  {
    label: "Profile",
    path: "/dashboard/profile",
  },
];
export default routes;
