import esbuild from "esbuild";
import fs from "fs";

// Build script.

await esbuild.build({
	external: ["alt", "alt-server", "alt-client", "alt-webview"],
	entryPoints: ["source/sample/server/main.ts", "source/sample/client/main.ts"],

	outbase: "source",
	outdir: "resources",

	bundle: true,
	minify: true,

	platform: "node",
	target: "esnext",

	format: "esm"
});


// Copy over config files.

await fs.copyFileSync("source/sample/resource.cfg", "resources/sample/resource.cfg");