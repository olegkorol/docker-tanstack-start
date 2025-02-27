export { default } from "./main.mjs";
export const config = {
  name: "server handler",
  generator: "nitro@",
  path: "/*",
  excludedPath: ["/.netlify/*"],
  preferStatic: true,
};