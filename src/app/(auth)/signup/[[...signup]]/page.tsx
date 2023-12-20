import { SignUp } from "@clerk/nextjs";
import { FC } from "react";

const SignUpPage: FC = (props) => {
    return <SignUp redirectUrl="/dashboard" signInUrl="/login" />;
};

export default SignUpPage;
