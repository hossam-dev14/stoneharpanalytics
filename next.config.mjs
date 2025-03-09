/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
<<<<<<< HEAD
=======
  trailingSlash: true, // Ensure URLs end with a trailing slash
>>>>>>> 8844bb793eb228cbd6ad5b32a09f29594ffcc831
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["images.pexels.com"],
    remotePatterns: [
      {
        protocol: "https", // Use "https" if your images are served over HTTPS
        hostname: "swiperjs.com", // Allow images from localhost
        port: "", // Leave empty if using default ports (80 for HTTP, 443 for HTTPS)
        pathname: "/**", // Allow images from this specific path
      },
    ],
  },
  async headers() {
    const headers = [];
    if (process.env.APP_ENV !== "production") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
        source: "/:path*",
      });
    }
    return headers;
  },
};

export default nextConfig;
