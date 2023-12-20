import { FC, PropsWithChildren } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
    return <main className="flex items-center justify-center w-full h-screen">{children}</main>;
};

export default AuthLayout;
