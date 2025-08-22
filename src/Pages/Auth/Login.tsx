import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import LoginForm from "../../Components/LoginForm/LoginForm.tsx";
import logo from "../../assets/images/logo.png";
import sideImage from "../../assets/images/loginpage-image.webp";
import { login } from "../../api/authApi.ts";
import type { LoginPayload } from "../../types/auth";
import axios from "axios";

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

  const handleLogin = async (data: LoginPayload) => {
    setIsLoading(true);
    setError(null)
    try {
      await login({ email: data.email, password: data.password });
    } catch (err: unknown) {
        console.error("Login failed:", err);

        let errorMessage = "Incorrect email & Password";

        if (axios.isAxiosError(err)) {
            errorMessage = err.response?.data?.message || errorMessage;
        } else if (err instanceof Error) {
            errorMessage = err.message;
        }

        setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

    const handleClearError = () => {
        setError(null);
    };
  return (
    <>
      <Grid container>
        <Grid size={{ xs: 12, md: 12, lg: 6 }} sx={{ height: "100%" }}>
          <Box
            sx={{
              marginLeft: { xs: 1, sm: 2, md: 3, lg: 10 },
              marginTop: { xs: 2, sm: 2, md: 5, lg: 10 },
              px: 2,
            }}
          >
            <Typography
              component={"div"}
              sx={{
                display: "flex",
                gap: "15px",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "36px",
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
                fontSize: "27px",
                lineHeight: "40px",
                mt: 2,
              }}
            >
              Thought Leadership Copilot
            </Typography>
            <Typography
              sx={{
                display: "flex",
                gap: "20px",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              Your AI companion for thought leadership excellence
            </Typography>
            <Box sx={{ mt: 4 }}>
              <LoginForm onSubmit={handleLogin} isLoading={isLoading} error={error}
                         onClearError={handleClearError}/>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 6 }} sx={{ py: 2 }}>
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
export default Login;
