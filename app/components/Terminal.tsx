"use client";
import { useEffect } from "react";
import { Terminal as TerminalComponent } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { AttachAddon } from "xterm-addon-attach";
export default function Terminal() {
  useEffect(() => {
    // const ws = new WebSocket("ws://localhost:8080");
    const ws = new WebSocket(process.env.NEXT_PUBLIC_WS_URL!);
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
      console.log("opening");
      term.open(terminalElement);
      fitAddon.fit();
      term.write(
        "render@srv-cjdj23ivvtos73bmkckg-hibernate-88f5c5cb8-x95t4:~$ "
      );
      ws.onmessage = function (message) {
        console.log(message);
      };
      // term.loadAddon(attachAddon);
      // term.loadAddon(fitAddon);

      // term.onData((e) => {
      //   console.log(e);
      //   ws.send("ls\r");
      // });
    }
    return () => {
      term.dispose();
      ws.close();
    };
  }, []);
  return <div id="terminal"></div>;
}
