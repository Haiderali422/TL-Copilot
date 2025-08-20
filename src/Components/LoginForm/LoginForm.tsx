import React, {useState} from 'react'
import {Box, Button, CircularProgress, IconButton, InputAdornment, Link, TextField, Typography,} from "@mui/material";
import {useForm} from "react-hook-form";
import type {LoginPayload} from "../../types/auth";
import eyeIcon from '../../assets/images/iconoir_eye (1).png'


interface LoginFormProps {
    onSubmit: (data: { email: string; password: string }) => void;
    isLoading: boolean;
}

const LoginForm:React.FC<LoginFormProps> = ({onSubmit , isLoading}: LoginFormProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };
    const { handleSubmit, register, formState: { errors } } = useForm<{ email: string; password: string }>();
    const onFormSubmit = (data:LoginPayload) => {
        onSubmit(data);
    };
    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit(onFormSubmit)}
                sx={{display:"flex" ,
                    flexDirection:"column" , gap:3 }} >
                <Box>
                    <label htmlFor='email' >Email</label>
                    <TextField
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        required
                        variant="outlined"
                        fullWidth
                        sx={{

                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#fffff',

                                },
                                '&:hover fieldset': {
                                    borderColor: '#d1d5db',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#3b82f6',
                                    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)',
                                },
                            },
                            '& .MuiInputBase-input': {
                                px: 2,
                                py: 1,
                                borderRadius:2,
                            },
                            '&::placeholder': {
                                color: '#9ca3af',
                                opacity: 1,
                            },
                        }}
                    />
                </Box>
                   <Box>
                 <label htmlFor='password'>Password</label>
                <TextField
                    id="password"
                    placeholder="Enter your password"
                    type={showPassword ? "password" : "text"}
                    {...register('password')}
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

                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#fffff',
                            },
                            '&:hover fieldset': {
                                borderColor: '#d1d5db',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#3b82f6',
                                boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)',
                            },
                        },
                        '& .MuiInputBase-input': {
                            px: 2,
                            py: 1,
                        },
                    }}
                />
                       <Box display="flex" justifyContent="flex-end">
                            <Link underline={"hover"} sx={{
                                  mt:1,
                                  fontFamily:"Segoe UI",
                                  fontSize : "12px",
                                  color : "rgb(107, 114, 128)",
                                  fontWeight: 400,
                                  cursor : "pointer",
                              }} >Forgot Password?</Link>
                       </Box>

                   </Box>
                <Button
                    type="submit"
                    variant={"contained"}
                    disabled={isLoading}
                    fullWidth
                    sx={{mt:1,
                        "&.Mui-disabled": {
                            backgroundColor: "primary.main",
                            color: "white",
                            opacity: 0.6,
                        },
                    }}
                >
                    {isLoading && (
                        <CircularProgress
                            size={20}
                            sx={{ color: "white", mr: 1 }}
                        />
                    )}
                    {isLoading ? "Sign in...." : "Sign in"}</Button>
                < Typography  textAlign="center" mt={10}
                             sx={{
                                 fontFamily: "Segoe UI",
                                 fontWeight: 400,
                                 fontStyle : "normal",
                                 fontSize: "14px",
                                 lineHeight: "20px",
                                 color: "rgb(31, 41, 55)",
                             }}
                >
                    Don't have an account?{' '}
                    <Link href="/signup" underline="hover"
                          sx={{
                              fontFamily: "Segoe UI",
                              fontWeight: 400,
                              fontStyle : "normal",
                              fontSize: "14px",
                              lineHeight: "20px",
                          }}
                    >
                        Sign up
                    </Link>
                </Typography>

            </Box>



        </>
    )
}
export default LoginForm