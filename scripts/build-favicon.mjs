import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public", "media", "brand", "logo.webp");
const outPath = path.join(root, "public", "media", "brand", "favicon.svg");

const b64 = fs.readFileSync(logoPath).toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
  <defs>
    <clipPath id="g"><circle cx="32" cy="32" r="32"/></clipPath>
  </defs>
  <g clip-path="url(#g)">
    <image width="64" height="64" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/webp;base64,${b64}"/>
  </g>
</svg>`;

fs.writeFileSync(outPath, svg);
console.log("Wrote", outPath, fs.statSync(outPath).size, "bytes");
