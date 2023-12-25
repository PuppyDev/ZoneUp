import SearchCommandPalette from "./SearchCommandPalette";

const DashboardHeader: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full py-6 shadow text-white bg-[#3c414a]">
            <div className="flex w-full list-none">
                <div className="w-10">
                    <Link href="/dashboard"> Z </Link>
                </div>
                <div>
                    <SearchCommandPalette />
                </div>

                <Button
                    asChild
                    className="text-white"
                    style={{
                        background: "linear-gradient(-45deg, #ffc800, #ff02f0, #8930df, #49ccf9);",
                    }}
                >
                    <Link href="/settings/billing">Upgrade</Link>
                </Button>
                <div>123</div>
                <div>456</div>
                <div>789</div>
                <div>JQK</div>
                <div>KA2</div>
            </div>
        </header>
    );
};

export default DashboardHeader;
