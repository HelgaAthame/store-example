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
    ],
  },
  // Дополнительно можно использовать rewrites для проксирования API-запросов
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Локальный путь
        destination: "https://fakestoreapi.com/:path*", // Проксирование внешнего API
      },
    ];
  },
};

export default config;
