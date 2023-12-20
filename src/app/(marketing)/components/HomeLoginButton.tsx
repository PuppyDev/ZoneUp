"use client";
import { FC } from "react";

const HomeLoginButton: FC = () => {
    const router = useRouter();

    const navigateToLogin = () => {
        router.push("/login");
    };

    return (
        <Button
            type="button"
            onClick={navigateToLogin}
            className="justify-center py-4 text-sm font-bold leading-5 text-gray-800 transition-all bg-white bg-opacity-0 rounded-lg shadow-lg cursor-pointer whitespace-nowrap px-7 max-md:px-5 hover:bg-black hover:text-white hover:bg-opacity-20"
        >
            Log in
        </Button>
    );
};

export default HomeLoginButton;
