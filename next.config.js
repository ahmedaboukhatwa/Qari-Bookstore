/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
// const nextConfig = {
//   reactStrictMode: false,
//   webpack5: true,
//   webpack:(config)=>{
//     config.resolve.fallback = { fs: false };
//   }
// }
module.exports = nextConfig
