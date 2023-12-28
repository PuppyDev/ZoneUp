"use client";

import { OrganizationList, useUser } from "@clerk/nextjs";

const DashboardPage = () => {
    const { user } = useUser();

    return (
        <div className="container flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl">Dashboard Page</h1>
            {user?.imageUrl && <img width={50} src={user?.imageUrl} alt="user" />}

            <OrganizationList
                hidePersonal
                afterCreateOrganizationUrl="/w/:id"
                afterSelectOrganizationUrl="/w/:id"
            />
        </div>
    );
};

export default DashboardPage;
