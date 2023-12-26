import { useOrganization } from "@clerk/nextjs";
import { SidebarIcon } from "lucide-react";
import Image from "next/image";

const AsideWorkspaceSelection: React.FC = () => {
    const { organization } = useOrganization();

    const { closeSidebarEvent } = usePreferencesState();

    return (
        <div className="flex items-center justify-between">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <div className="flex items-center gap-1 select-none">
                            {organization?.imageUrl && (
                                <Image
                                    src={organization.imageUrl}
                                    alt={organization.name}
                                    width={20}
                                    height={20}
                                    priority
                                />
                            )}

                            <p>{organization?.name}</p>
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="sm" onClick={closeSidebarEvent}>
                            <SidebarIcon />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p> Toggle sidebar </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};

export default AsideWorkspaceSelection;
