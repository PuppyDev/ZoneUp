"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

const DashboardPage = () => {
    const { user } = useUser();

    return (
        <div>
            <h1 className="text-3xl">Dashboard Page</h1>
            <p>{JSON.stringify({ email: user?.emailAddresses, name: user?.fullName })}</p>
            {user?.imageUrl && <img width={50} src={user?.imageUrl} alt="user" />}
        </div>
    );
};

export default DashboardPage;
