import { FC } from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage: FC = (props) => {
    return <SignUp redirectUrl="/dashboard" />;
};

export default SignUpPage;
