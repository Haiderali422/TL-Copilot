import React from 'react'
import {Box, TextField} from "@mui/material";

const SignUpForm : React.FC = () => {
    return (
        <>

            <Box sx={{
                display: 'flex',
                gap:"20px",
            }} >

                <Box>
                    <label htmlFor='name' >First Name</label>
                    <TextField
                        id="name"
                        placeholder="Enter your first name"
                        type="text"
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
                    <label htmlFor='lastName' >Last Name</label>
                    <TextField
                        id="lastName"
                        placeholder="Enter your last name"
                        type="text"
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

            </Box>

        </>
    )
}
export default SignUpForm
