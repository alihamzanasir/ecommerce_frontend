// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// import { IoLockClosedOutline } from "react-icons/io5";
// import { FiEye } from "react-icons/fi";
// import { FiEyeOff } from "react-icons/fi";
// import { HiOutlineMail } from "react-icons/hi";

// import "./index.scss";

// export default function Signin() {
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data: any) => console.log(data);
//   // console.log(errors);

//   return (
//     <div className="box">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="box1">
//         <div className="card">
//           <h1>Sign In</h1>
//           <div className="password-input" style={{backgroundColor:"white"}}>
//             <span style={{paddingLeft:"5px"}}>
//               <HiOutlineMail />
//             </span>
//             <input
//             style={{width:"19.2rem"}}
//               type="email"
//               placeholder="Email Adress"
//               {...register("Email", { required: true, maxLength: 80 })}
//             />
//           </div>
//           <br />
//           <div className="password-input" style={{backgroundColor:"white"}}>
//             <span className="prefix" style={{paddingLeft:"5px"}}>
//               <IoLockClosedOutline />
//             </span>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               {...register("Password", {
//                 required: true,
//                 minLength: 6,
//                 maxLength: 12,
//               })}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <span style={{paddingRight:"5px"}} className="suffix" onClick={togglePasswordVisibility}>
//               {showPassword ? <FiEye /> : <FiEyeOff />}
//             </span>
//           </div>
//           <span style={{color:"blue", paddingLeft:"13rem", paddingTop:".5rem", cursor:"pointer"}}>forgot password</span>
//           <br />
//         </div>
//         <div className="btn">
//           {/* <input type="submit" placeholder="Sign In" /> */}
//           <button>Sign In</button>
//           <span style={{color:"blue", marginTop:"1rem"}}>or LoginIn with google</span>
//         </div>
//         </div>
//       </form>
//     </div>
//   );
// }
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}