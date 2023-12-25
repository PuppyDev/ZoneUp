import { SignUp } from "@clerk/nextjs";

const SignUpPage: React.FC = (props) => {
    return <SignUp redirectUrl="/dashboard" signInUrl="/login" />;
};

export default SignUpPage;
