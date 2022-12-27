import MinimalLayout from "@/layouts/minimal.layout";
import { NextPageWithLayout } from "@/types/layout.types";

import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Login: NextPageWithLayout = (props: Props) => {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    router.push("/dashboard");
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <div>login</div>
    // <Container
    //   component="main"
    //   maxWidth="xs"
    //   sx={{
    //     height: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //   }}
    // >
    //   <Box>
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
    //         <LockOutlinedIcon />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Sign in
    //       </Typography>
    //       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    //         <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           name="password"
    //           label="Password"
    //           type="password"
    //           id="password"
    //           autoComplete="current-password"
    //         />
    //         <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
    //         <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
    //           Sign In
    //         </Button>
    //         <Grid container>
    //           <Grid item xs>
    //             <NextLink href="/forgot-password">Forgot password?</NextLink>
    //           </Grid>
    //           <Grid item>
    //             <NextLink href="signup">Don&apos;t have an account? Sign Up</NextLink>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Container>
  );
};

Login.Layout = MinimalLayout;

export default Login;
