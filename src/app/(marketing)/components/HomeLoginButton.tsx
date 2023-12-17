"use client";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

const HomeLoginButton: FC = () => {
    const router = useRouter();

    const navigateToLogin = () => {
        router.push("/login");
    };

    return (
        <Button size="lg" className="block px-10" onClick={navigateToLogin}>
            Go to Login page
        </Button>
    );
};

export default HomeLoginButton;
