import { OrganizationProfile } from "@clerk/nextjs";
import { FC } from "react";

const page: FC = (props) => {
    return (
        <div>
            <OrganizationProfile />
        </div>
    );
};

export default page;
