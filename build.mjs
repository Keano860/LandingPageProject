import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of ["index.html", "styles.css", "script.js"]) {
  cpSync(join(root, file), join(dist, file));
}

if (existsSync(join(root, "assets"))) {
  cpSync(join(root, "assets"), join(dist, "assets"), { recursive: true });
}
