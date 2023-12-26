import { PropsWithChildren } from "react";
import DashboardSidebar from "./DashboardSidebar";
import MainTopBar from "./MainTopBar";

const DashboardMain: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex w-full h-main-container-height">
            <DashboardSidebar />
            <main data-testid="top-bar-container" className="relative flex flex-col w-full h-full">
                <MainTopBar />
                <div className="main-background absolute top-0 left-0 w-full h-full bg-[url('/images/dashboard/background-dark.png')] bg-no-repeat bg-contain pointer-events-none" />
                <div className="relative flex flex-col h-full p-4 overflow-y-auto">{children}</div>
            </main>
        </div>
    );
};

export default DashboardMain;
