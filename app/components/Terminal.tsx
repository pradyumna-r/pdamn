"use client";
import { useEffect } from "react";
import { Terminal as TerminalComponent } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { AttachAddon } from "xterm-addon-attach";
export default function Terminal() {
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    let attachAddon;
    const term = new TerminalComponent({
      cursorBlink: true,
    });
    const fitAddon = new FitAddon();
    ws.onopen = function (event) {
      let attachAddon = new AttachAddon(ws);
      term.loadAddon(attachAddon);
    };

    term.loadAddon(fitAddon);
    console.log(attachAddon);

    const terminalElement = document.getElementById("terminal");
    if (terminalElement) {
      console.log(term);
      term.open(terminalElement);
      term.write("bash-3.2$ ");
      ws.onmessage = function (message) {
        console.log(message);
      };
      // term.loadAddon(attachAddon);
      // term.loadAddon(fitAddon);
      fitAddon.fit();
      // term.onData((e) => {
      //   console.log(e);
      //   ws.send("ls\r");
      // });
    }
  });
  return <div id="terminal">terminal</div>;
}
