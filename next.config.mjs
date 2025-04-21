/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // GitHub Pages uses a subdirectory structure, so we need to set the base path
    basePath: process.env.NODE_ENV === 'production' ? '/TP-04-SOCIAL-NETWORK' : '',
    // To handle images properly in GitHub Pages
    images: {
      unoptimized: true,
    },
    // Disable server actions since we're using static export
    experimental: {
      serverActions: false,
    }
  };
  
  export default nextConfig;