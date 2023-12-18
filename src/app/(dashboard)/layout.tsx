import React, { FC, PropsWithChildren } from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex flex-col">
            <section className="relative">
                <DashboardHeader />
            </section>
            <div className="flex flex-1 h-full">
                <DashboardSidebar />
                <main className="flex items-center justify-center w-full h-screen">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
