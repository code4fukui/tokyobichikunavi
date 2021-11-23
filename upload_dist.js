import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { S3 } from "https://code4fukui.github.io/S3API/S3.js";
import { CONTENT_TYPE } from "https://js.sabae.cc/CONTENT_TYPE.js";

const s3 = await new S3().init();

const path = "dist/";
const fns = await dir2array(path);
for (const fn of fns) {
  const n = fn.lastIndexOf(".");
  const ext = fn.substring(n + 1);
  const contentType = CONTENT_TYPE[ext] || "text/plain";
  const bin = await Deno.readFile(path + fn);
  await s3.put(fn, bin, { contentType });
  console.log(fn);
}
console.log(s3.getURL("index.html"));

// https://s3.ap-northeast-1.amazonaws.com/bichikunavi.code4fukui.org/index.html
// http://bichikunavi.code4fukui.org.s3-website-ap-northeast-1.amazonaws.com
