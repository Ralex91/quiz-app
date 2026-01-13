import esbuild from "esbuild"

esbuild.build({
  entryPoints: ["server.js"],
  bundle: true,
  minify: true,
  platform: "node",
  outfile: "dist/index.cjs",
  sourcemap: true,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
})
