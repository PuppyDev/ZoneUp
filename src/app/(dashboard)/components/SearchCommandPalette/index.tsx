import { SearchIcon } from "lucide-react";
import React from "react";
import { CommandMenu } from "./CommandMenu";

const SearchCommandPalette: React.FC = () => {
    return (
        <div className="flex items-center bg-gray-500 rounded-md">
            <SearchIcon />

            {/* <Input className="bg-inherit" /> */}

            <CommandMenu />
        </div>
    );
};

export default SearchCommandPalette;
