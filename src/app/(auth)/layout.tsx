import { PropsWithChildren } from "react";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return <main className="flex items-center justify-center w-full h-screen">{children}</main>;
};

export default AuthLayout;
