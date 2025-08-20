import React from "react";
import { LinearProgress, Typography, Box } from "@mui/material";

interface Props {
  password: string;
  display: string;
}

const getStrength = (password: string) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
};

const PasswordStrengthIndicator: React.FC<Props> = ({ password, display }) => {
  const strength = getStrength(password);
  const colors = ["red", "orange", "blue", "lightgreen", "green"];
  const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

  return (
    <Box mt={1} sx={{ display: { display }, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 0.5,
        }}
      >
        <Typography variant="caption" color="text.secondary">
          Password strength:
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: colors[strength], fontWeight: "medium" }}
        >
          {labels[strength] || ""}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={(strength / 4) * 100}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: "#eee",
          "& .MuiLinearProgress-bar": { backgroundColor: colors[strength] },
        }}
      />
      <Box sx={{ mt: 1 }}>
        <Typography variant="caption" color="text.secondary" display="block">
          Password must be at least 8 characters long
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block">
          You can use letters, numbers, and special characters like #, @, $, %,
          etc.
        </Typography>
      </Box>
    </Box>
  );
};

export default PasswordStrengthIndicator;
