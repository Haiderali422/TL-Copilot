import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../Schemas/validation.ts";
import type { SignUpFormValues, SignUpPayload } from "../../types/auth";
import PasswordStrength from "./PasswordStrength.tsx";
import eyeIcon from "../../assets/images/iconoir_eye (1).png";
interface SignUpFormProps {
  onSubmit: (data: SignUpPayload) => void;
  isLoading: boolean;
}

const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fffff",
    },
    "&:hover fieldset": {
      borderColor: "#d1d5db",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
    },
  },
  "& .MuiInputBase-input": {
    px: 2,
    py: 1,
    borderRadius: 2,
  },
  "&::placeholder": {
    color: "#9ca3af",
    opacity: 1,
  },
};

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, isLoading }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const [password, setPassword] = useState("");
  const display = password === "" ? "none" : "block";
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(signupSchema),
  });

  const onFormSubmit = (data: SignUpFormValues) => {
    onSubmit(data);
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onFormSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: { md: "flex", lg: "flex" },
          gap: 2,
          width: "100%",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography component="label" htmlFor="firstName" variant="body2">
            First Name
          </Typography>
          <TextField
            id="firstName"
            placeholder="Enter your first name"
            type="text"
            {...register("firstName")}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            required
            variant="outlined"
            fullWidth
            sx={textFieldStyles}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography component="label" htmlFor="lastName" variant="body2">
            Last Name
          </Typography>
          <TextField
            id="lastName"
            placeholder="Enter your last name"
            type="text"
            {...register("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            required
            variant="outlined"
            fullWidth
            sx={textFieldStyles}
          />
        </Box>
      </Box>

      <Box>
        <Typography component="label" htmlFor="email" variant="body2">
          Email
        </Typography>
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
          sx={textFieldStyles}
        />
      </Box>

      <Box>
        <Typography component="label" htmlFor="password" variant="body2">
          Password
        </Typography>
        <TextField
          id="password"
          placeholder="Create a Strong Password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          fullWidth
          sx={textFieldStyles}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    <img src={eyeIcon} alt={"eyeIcon"} />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <PasswordStrength password={password} display={display} />
      </Box>

      <Box>
        <Typography component="label" htmlFor="confirmPassword" variant="body2">
          Confirm Password
        </Typography>
        <TextField
          id="confirmPassword"
          placeholder="Confirm your Password"
          autoComplete="current-password"
          type={showPassword ? "text" : "password"}
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          required
          variant="outlined"
          fullWidth
          sx={textFieldStyles}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    <img src={eyeIcon} alt={"eyeIcon"} />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 1,
          "&.Mui-disabled": {
            backgroundColor: "primary.main",
            color: "white",
            opacity: 0.8,
          },
        }}
        disabled={isLoading}
      >
        {isLoading && (
          <CircularProgress size={20} sx={{ color: "white", mr: 1 }} />
        )}
        {isLoading ? "Create account..." : "Create account"}
      </Button>

      <Typography
        textAlign="center"
        sx={{
          fontFamily: "Segoe UI",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "14px",
          lineHeight: "20px",
          color: "rgb(31, 41, 55)",
        }}
      >
        Already have an account?{" "}
        <Link
          href="/login"
          underline="hover"
          sx={{
            fontFamily: "Segoe UI",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          Sign in
        </Link>
      </Typography>

      <Typography
        variant="body2"
        color="textSecondary"
        textAlign={"center"}
        sx={{ fontSize: "0.75rem" }}
      >
        By creating an account, you agree to our{" "}
        <Link href="#" color="primary" underline="hover">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="#" color="primary" underline="hover">
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUpForm;
