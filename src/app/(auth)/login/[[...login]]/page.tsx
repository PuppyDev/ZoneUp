import { SignIn } from "@clerk/nextjs";

const LoginPage: React.FC = (props) => {
    return <SignIn redirectUrl="/dashboard" afterSignInUrl="/dashboard" signUpUrl="/signup" />;
};

export default LoginPage;
