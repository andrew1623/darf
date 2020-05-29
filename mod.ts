/* 
DARF - Deno Auto Reload & Format -er
Andrew C. Thompson
https://github.com/andrew1623
*/

// TODO: map permission flags from args
//      +parse file / dir name
//      +add watch / run functions

import clc from "https://deno.land/x/color/index.ts";
import { parse } from "../remote/deno/std/flags/mod.ts";
import { runFmt } from "./util/runFmt.ts";

// Command line arguments
const { args } = Deno;
const parsedArgs = parse(args);

let eventIndex = 0;
const watcher = Deno.watchFs("."); // NOTE: Change to target dir or file

// Loop exectutes every time a file changes
for await (const event of watcher) {
  if (event.kind === "modify") {
    runFmt(event.paths[0]);
  }
  console.log(
    clc.bgCyan.black.text(`event ${eventIndex}:`),
    clc.bgCyan.reset.text(" "),
  );
  //  console.log(event);
  eventIndex++;
}
