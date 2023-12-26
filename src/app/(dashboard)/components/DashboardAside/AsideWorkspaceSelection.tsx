import { useOrganization } from "@clerk/nextjs";
import { ChevronDownIcon, PlusIcon, SettingsIcon, SidebarIcon, Users2Icon } from "lucide-react";
import Image from "next/image";

const AsideWorkspaceSelection: React.FC = () => {
    const { organization } = useOrganization();

    const { closeSidebarEvent } = usePreferencesState();

    return (
        <div className="flex items-center justify-between p-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                        <div className="flex items-center gap-1">
                            {organization?.imageUrl && (
                                <Image
                                    width={20}
                                    height={20}
                                    src={organization?.imageUrl}
                                    alt={organization.name}
                                />
                            )}
                            <p className="text-xl">{organization?.name}</p>
                            <ChevronDownIcon size={20} />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-4 w-72">
                    <DropdownMenuLabel className="flex items-center gap-4 pt-0 font-normal">
                        {organization?.imageUrl && (
                            <Image
                                width={40}
                                height={40}
                                src={organization?.imageUrl}
                                alt={organization.name}
                                className="rounded-xl"
                            />
                        )}
                        <div>
                            <p className="text-xl">{organization?.name}</p>
                            <p className="text-sm">
                                Free Forever * {organization?.membersCount} members
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup className="text-gray-300">
                        <DropdownMenuItem className="gap-2 text-lg hover:cursor-pointer">
                            <SettingsIcon size={20} />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-lg hover:cursor-pointer">
                            Upgrade
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-lg hover:cursor-pointer">
                            Apps
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-lg hover:cursor-pointer">
                            <Users2Icon size={20} />
                            Manage users
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="gap-2 text-lg hover:cursor-pointer">
                        <PlusIcon />
                        New Workspace
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="" onClick={closeSidebarEvent}>
                            <SidebarIcon size="20" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Collapse sidebar</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};

export default AsideWorkspaceSelection;
