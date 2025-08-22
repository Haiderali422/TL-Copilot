import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";
import sideImage from "../../assets/images/loginpage-image.webp";
import SignUpForm from "../../Components/SignUpForm/SignUpForm.tsx";
import { signup } from "../../api/authApi.ts";
import axios from 'axios'

const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    try {
      setIsLoading(true);
        setError(null)
      await signup({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });
    } catch (err: unknown) {
        console.error("Login failed:", err);

        let errorMessage =  'User with this email or username already exists';

        if (axios.isAxiosError(err)) {
            errorMessage = err.response?.data?.message || errorMessage;
        } else if (err instanceof Error) {
            errorMessage = err.message;
        }

        setError(errorMessage);
    }finally {
        setIsLoading(false);
    }

  };

    const handleClearError = () => {
        setError(null);
    };

  return (
    <>
      <Grid container>
        <Grid size={{ xs: 12, md: 12, lg: 6, xl: 6 }} sx={{ height: "100%" }}>
          <Box
            sx={{
              marginLeft: { xs: 1, sm: 2, md: 3, lg: 10 },
              px: 2,
            }}
          >
            <Typography
              component={"div"}
              sx={{
                display: "flex",
                gap: "15px",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "36px",
                color: "var(--heading-color)",
                mt: 4,
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
                  loading="lazy"
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
              sx={{
                display: "flex",
                gap: "20px",
                fontWeight: 600,
                fontStyle: "normal",
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
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "20px",
                color: "rgb(37, 99, 235)",
              }}
            >
              Your AI companion for thought leadership excellence
            </Typography>
            <Box sx={{ mt: 4 }}>
              <SignUpForm onSubmit={handleSignup} isLoading={isLoading}  error={error}
                          onClearError={handleClearError}/>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ lg: 6 }} sx={{ py: 2 }}>
          <Box
            component="img"
            loading="lazy"
            src={sideImage}
            alt="main-logo"
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
              mt:2,
              ml:3,
              width: "95%",
              height: "90vh",
              borderRadius: "20px",
              borderTopRightRadius : "65px 25px",
              borderBottomRightRadius : "60px 25px",
              objectFit: "cover",
            }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
};
export default SignUp;
