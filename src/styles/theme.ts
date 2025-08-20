
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1d4ed8",
        },
        secondary: {
            main: "#6b7280",
        },
        error: {
            main: "#dc2626",
        },
        background: {
            default: "#f9fafb",
            paper: "#ffffff",
        },
        text: {
            primary: "rgb(31, 41, 55)",
            secondary: "rgb(107, 114, 128)",
        },
    },

    typography: {
        fontFamily: [
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "sans-serif",
        ].join(","),
        body2: {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 400,
        },
        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },

    shape: {
        borderRadius: 8,
    },

    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#e5e7eb",
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
                        padding: "8px 12px",
                        borderRadius: 6,
                    },
                    "& input::placeholder": {
                        color: "#9ca3af",
                        opacity: 1,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    "&.Mui-disabled": {
                        backgroundColor: "#1d4ed8",
                        color: "white",
                        opacity: 0.7,
                    },
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    fontFamily: "Segoe UI",
                    fontSize: "14px",
                },
            },
        },
    },
});

export default theme;
