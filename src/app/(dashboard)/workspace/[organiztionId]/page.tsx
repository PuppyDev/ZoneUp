"use client";
import { useAuth } from "@clerk/nextjs";

const page: React.FC = (props) => {
    const { openSidebarEvent, isOpenSidebar } = usePreferencesState();
    const { userId } = useAuth();

    return (
        <div>
            {!isOpenSidebar && <Button onClick={openSidebarEvent}>Open Sidebar</Button>}
            WorkspacePage
            <p>{userId}</p>
        </div>
    );
};

export default page;
