
require('dotenv').config()
console.log(process.env)
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
 DB_HOST: "127.0.0.1",
DB_USER: "root",
DB_PASS: "codeaz",
DB_NAME: "project2",
  },
}

module.exports = nextConfig
