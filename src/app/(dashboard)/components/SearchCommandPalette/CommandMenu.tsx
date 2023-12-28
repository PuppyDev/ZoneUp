"use client";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/shared/components/ui/command";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";
import { useToggle } from "react-use";

export function CommandMenu() {
    const [showCommand, toggleShowCommand] = useToggle(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                toggleShowCommand();
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <CommandDialog open={showCommand} onOpenChange={toggleShowCommand}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                        <Smile className="w-4 h-4 mr-2" />
                        <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                        <Calculator className="w-4 h-4 mr-2" />
                        <span>Calculator</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <User className="w-4 h-4 mr-2" />
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <CreditCard className="w-4 h-4 mr-2" />
                        <span>Billing</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <Settings className="w-4 h-4 mr-2" />
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
