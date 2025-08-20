
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
