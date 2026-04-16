/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Keep tracing within frontend/ even when compose runs from repo root.
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
}

export default nextConfig

