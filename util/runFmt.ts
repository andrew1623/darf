import clc from "https://deno.land/x/color/index.ts";

export function runFmt(fileName: string): void {
  Deno.run({
    cmd: [
      Deno.execPath(),
      "fmt",
      fileName,
    ],
  });
  console.log(clc.yellow.text("Formatted "), fileName);
}
