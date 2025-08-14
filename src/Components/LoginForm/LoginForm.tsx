import React from 'react'
import {Box, Button, Link, TextField, Typography,} from "@mui/material";

const LoginForm:React.FC = () => {
    return (
        <>
            <Box sx={{display:"flex" , flexDirection:"column" , gap:3 }} >
                <Box>
                    <label htmlFor='email' >Email</label>
                    <TextField
                        id="email"
                        placeholder="Enter your email"
                        type="email"
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
                    type="password"
                    required
                    variant="outlined"
                    fullWidth

                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#d1d5db',
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
                  <Link underline={"hover"} sx={{
                      ml:67,
                      mt:1,
                      fontFamily:"Segoe UI",
                      fontSize : "12px",
                      color : "rgb(107, 114, 128)",
                      fontWeight: 400,
                      cursor : "pointer",
                  }} >Forgot Password?</Link>

                   </Box>
                <Button variant={"contained"}  fullWidth  sx={{mt:1}} >Sign In</Button>
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
                    <Link href="#" underline="hover"
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


