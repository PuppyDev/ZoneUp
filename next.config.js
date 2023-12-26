const WpAutoImport = require("unplugin-auto-import/webpack").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.plugins.push(
            WpAutoImport({
                imports: [
                    "react",
                    {
                        "next/navigation": [
                            "useRouter",
                            "useSearchParams",
                            "useParams",
                            "usePathname",
                            "redirect",
                            "permanentRedirect",
                        ],
                    },
                    { "next/link": [["default", "Link"]] },
                    { "next/image": [["default", "Image"]] },
                    { "next/script": [["default", "Script"]] },
                ],
                dirs: ["./src/shared/components/ui", "./src/shared/utils", "./src/shared/hooks"],
            }),
        );

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",
                port: "",
                pathname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
