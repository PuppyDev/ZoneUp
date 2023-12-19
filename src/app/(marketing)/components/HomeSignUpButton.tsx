"use client";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeSignUpButton = () => {
    const router = useRouter();

    const navigateToLogin = () => {
        router.push("/login");
    };

    return (
        <Button
            type="button"
            onClick={navigateToLogin}
            className="justify-center py-4 text-sm font-bold leading-5 text-white rounded-lg shadow-lg cursor-pointer whitespace-nowrap px-7 bg-violet-500 grow max-md:px-5"
        >
            Sign Up
        </Button>
    );
};

export default HomeSignUpButton;
