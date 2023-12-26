import React, { FC, PropsWithChildren } from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardMain from "./components/DashboardMain";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <DashboardHeader />
            <DashboardMain>{children}</DashboardMain>
        </>
    );
};

export default DashboardLayout;
