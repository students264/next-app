import path from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactCompiler: true,
  turbopack: {
    // Prevent lockfiles outside this app from changing the inferred root.
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
