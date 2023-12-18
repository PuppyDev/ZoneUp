"use client";

import React from "react";
import { OrganizationList, useUser } from "@clerk/nextjs";

const DashboardPage = () => {
    const { user } = useUser();

    return (
        <div className="container flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl">Dashboard Page</h1>
            <p className="max-w-[200px] text-base">{JSON.stringify({ email: user?.emailAddresses, name: user?.fullName })}</p>
            {user?.imageUrl && <img width={50} src={user?.imageUrl} alt="user" />}

            <OrganizationList hidePersonal afterCreateOrganizationUrl="/workspace/:id" afterSelectOrganizationUrl="/workspace/:id" />
        </div>
    );
};

export default DashboardPage;