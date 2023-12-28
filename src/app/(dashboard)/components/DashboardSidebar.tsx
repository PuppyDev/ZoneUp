"use client";
import AsideFavorites from "./DashboardAside/AsideFavorites";
import AsideNavigateMenus from "./DashboardAside/AsideNavigateMenus";
import AsideSpaces from "./DashboardAside/AsideSpaces";
import AsideSupports from "./DashboardAside/AsideSupports";
import AsideWorkspaceSelection from "./DashboardAside/AsideWorkspaceSelection";

const DashboardSidebar: React.FC = () => {
    const { isOpenSidebar, toggleOpenSidebar } = usePreferencesState();

    return (
        <Collapsible open={isOpenSidebar} onOpenChange={toggleOpenSidebar}>
            <CollapsibleContent asChild>
                <aside className="flex flex-col h-full w-[300px] bg-[#30343b] data-[state=open]:animate-collapsible-w-down data-[state=closed]:animate-collapsible-w-up">
                    <AsideWorkspaceSelection />
                    <SelectSeparator />
                    <ScrollArea className="px-4 grow">
                        <AsideNavigateMenus />
                        <SelectSeparator />
                        <AsideFavorites />
                        <AsideSpaces />
                    </ScrollArea>
                    <AsideSupports />
                </aside>
            </CollapsibleContent>
        </Collapsible>
    );
};

export default DashboardSidebar;
