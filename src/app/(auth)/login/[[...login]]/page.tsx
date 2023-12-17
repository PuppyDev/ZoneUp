import { SignIn } from "@clerk/nextjs";
import { FC } from "react";

const LoginPage: FC = (props) => {
    return <SignIn redirectUrl="/dashboard" />;
};

export default LoginPage;
