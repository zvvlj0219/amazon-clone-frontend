import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    // cf: https://github.com/vercel/next.js/issues/71638
    // 2024/11/23時点で、まだ改善されていない
    silenceDeprecations: ['legacy-js-api'],
  },
  // cf: https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**', //すべてのパス cf: https://github.com/vercel/next.js/issues/57826#issuecomment-1788445429
      },
    ],
  },
};

export default nextConfig;
