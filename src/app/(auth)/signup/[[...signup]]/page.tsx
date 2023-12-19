import { FC } from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage: FC = (props) => {
    return <SignUp redirectUrl="/dashboard" signInUrl="/login" />;
};

export default SignUpPage;
