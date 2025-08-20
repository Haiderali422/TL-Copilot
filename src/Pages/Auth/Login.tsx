import React, {useState} from 'react'
import {Box, Grid, Typography,} from "@mui/material";
import LoginForm from "../../Components/LoginForm/LoginForm.tsx";
import logo from '../../assets/images/logo.png'
import sideImage from '../../assets/images/loginpage-image.webp'
import {login} from "../../api/authApi.ts";
import type {LoginPayload} from "../../types/auth";


const Login:React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (data: LoginPayload) => {
        setIsLoading(true);
        try {
            console.log('login', data);
            await login({email: data.email, password: data.password});
            console.log("login successful", data);
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
       <>
           <Grid container>
               <Grid  size={{ xs: 12, md: 12 , lg:6 }} sx={{height: '100%'}}>
                   <Box sx={{
                       marginLeft: { xs: 1, sm: 2, md: 3 , lg:10 },
                       marginTop: { xs: 2, sm: 2, md: 5, lg: 10 },
                       px:2,

                   }} >
                   <Typography
                       sx={{
                           display: "flex",
                           gap : "15px",
                           fontFamily: "Segoe UI",
                           fontWeight: 700,
                           fontSize: "30px",
                           lineHeight: "36px",
                           color: "var(--heading-color)",
                           mt:4,
                       }}
                   >
                       <Box
                           sx={{
                               backgroundColor: "#2563EB",
                               padding: "8px",
                               borderRadius: "8px",
                               display: "inline-flex",
                               alignItems: "center",
                               justifyContent: "center",
                           }}
                       >
                           <Box
                               component="img"
                               src={logo}
                               alt="main-logo"
                               sx={{
                                   width: 28,
                                   height: 28,
                                   color: "transparent",
                               }}
                           />
                       </Box>
                       TL Copilot
                   </Typography>
                   <Typography
                       variant="h2"
                       sx={{
                           display: "flex",
                           gap: "20px",
                           fontFamily: "Segoe UI",
                           fontWeight: 600,
                           fontStyle : "normal",
                           fontSize: "27px",
                           lineHeight: "40px",
                           color: "var(--heading-color)",
                           mt: 2,
                       }}
                   >
                       Thought Leadership Copilot
                   </Typography>
                   <Typography
                       sx={{
                           display: "flex",
                           gap: "20px",
                           fontFamily: "Segoe UI",
                           fontWeight: 400,
                           fontStyle : "normal",
                           fontSize: "14px",
                           lineHeight: "20px",
                           color: "rgb(37, 99, 235)",
                       }}
                   >
                       Your AI companion for thought leadership excellence
                   </Typography>
                       <Box sx={{mt:4,}} >
                           <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
                       </Box>
               </Box>
               </Grid>
               <Grid size={{ xs: 6, md: 4 ,lg:6}} sx={{py:2,}} >
                   <Box
                       component="img"
                       src={sideImage}
                       alt="main-logo"
                       sx={{
                           display:{xs:"none" , sm:"none" , md:"none" , lg:"block" },
                           width: "95%",
                           height: "90vh",
                           borderRadius: "20px",
                           objectFit: "cover",
                       }}
                   >

                   </Box>
               </Grid>
           </Grid>



       </>
    )
}
export default Login





