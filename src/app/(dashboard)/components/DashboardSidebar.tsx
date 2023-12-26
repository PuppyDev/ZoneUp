"use client";
import AsideNavigateMenus from "./DashboardAside/AsideNavigateMenus";
import AsideSpaces from "./DashboardAside/AsideSpaces";
import AsideSupports from "./DashboardAside/AsideSupports";
import AsideWorkspaceSelection from "./DashboardAside/AsideWorkspaceSelection";

const DashboardSidebar: React.FC = () => {
    const { isOpenSidebar, toggleOpenSidebar } = usePreferencesState();

    return (
        <Collapsible className="bg-[#30343b]" open={isOpenSidebar} onOpenChange={toggleOpenSidebar}>
            <CollapsibleContent asChild>
                <aside className="h-full">
                    <AsideWorkspaceSelection />
                    <AsideNavigateMenus />
                    <AsideSpaces />
                    <AsideSupports />
                </aside>
            </CollapsibleContent>
        </Collapsible>
    );
};

export default DashboardSidebar;
