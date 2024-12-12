/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true, // Рекомендуется оставить включенным
  output: "standalone", // Для Docker-окружений
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com", // Разрешенные внешние домены для изображений
      },
      {
        protocol: "https",
        hostname: "i.imgur.com", // Еще один разрешенный внешний домен
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com", // Еще один разрешенный внешний домен
      },
    ],
  },
};

export default config;
