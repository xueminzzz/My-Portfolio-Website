/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './loader.js',
  },
  output: "export",
}

module.exports = nextConfig
