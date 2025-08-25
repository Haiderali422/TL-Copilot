import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
  Alert,
  Collapse,
} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import type { LoginPayload } from "../../types/auth";
import eyeIcon from "../../assets/images/iconoir_eye (1).png";

interface LoginFormProps {
    onSubmit: (data: { email: string; password: string }) => void;
    isLoading: boolean;
    error?: string | null;
    onClearError?: () => void;
}


const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading, error,
   onClearError,
}: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();
  const onFormSubmit = (data: LoginPayload) => {
      if (onClearError) onClearError();
    onSubmit(data);
  };

  return (
    <>
        <Collapse in={!!error}>
            <Alert
                severity="error"
                sx={{ mb: 2 }}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={onClearError}
                    >
                        <Close fontSize="inherit" />
                    </IconButton>
                }
            >
                {error}
            </Alert>
        </Collapse>
      <Box
        component="form"
        onSubmit={handleSubmit(onFormSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Box>
          <label htmlFor="email">Email</label>
          <TextField
            id="email"
            placeholder="Enter your email"
            type="email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            required
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box>
          <label htmlFor="password">Password</label>
          <TextField
            id="password"
            placeholder="Enter your password"
            type={showPassword ? "password" : "text"}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            required
            variant="outlined"
            fullWidth
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      <img src={eyeIcon} alt={eyeIcon} />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}

          />
          <Box display="flex" justifyContent="flex-end">
            <Link
              underline={"hover"}
              sx={{

                fontSize : "12px",
                fontWeight: 400,
                mt: 1,
                color:"secondary.main",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </Link>
          </Box>
        </Box>
        <Button
          type="submit"
          variant={"contained"}
          disabled={isLoading}
          fullWidth
        >
          {isLoading && (
            <CircularProgress size={20} sx={{ color: "white", mr: 1 }} />
          )}
          {isLoading ? "Sign in...." : "Sign in"}
        </Button>
        <Typography
          textAlign="center"
          mt={10}
        >
          Don't have an account?{" "}
          <Link
            component={RouterLink}
            to="/signup"
            underline="hover"
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </>
  );
};
export default LoginForm;
