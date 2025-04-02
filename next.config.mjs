/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/500x400/png**",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        port: "",
        pathname: "/api*",
      },
    ],
  },
};

export default nextConfig;
