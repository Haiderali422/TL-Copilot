
export interface SignUpPayload {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth?: string;
}
export interface SignUpFormValues extends SignUpPayload {
    confirmPassword: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}


export type SignupPayload = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth?: Date;
};

export type AuthResponse = {
    accessToken: string;
    refreshToken: string;
    user: {
        _id: string;
        email: string;
        firstName: string;
        lastName: string;
        dateOfBirth: string;
    };

};
