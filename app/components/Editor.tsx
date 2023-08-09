"use client";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Editor, { OnMount, OnChange } from "@monaco-editor/react";
import { type editor } from "monaco-editor";
const Preview = dynamic(() => import("@/app/components/Preview"), {
  ssr: false,
});

interface File {
  name: string;
  language: string;
  value: string;
}

interface Files {
  [filename: string]: File;
}

const files: Files = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: "console.log('hello world')",
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: "h1{color:red;}",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<h1>hello world</h1>",
  },
};

export default function EditorComponent() {
  //   console.log(onUserEdit);
  const [jsValue, setJsValue] = useState(files["script.js"].value);
  const [htmlValue, setHtmlValue] = useState(files["index.html"].value);
  const [cssValue, setCssValue] = useState(files["style.css"].value);
  console.log(jsValue);
  const [fileName, setFileName] = useState("script.js");
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const showValue = () => {
    if (editorRef.current === null) {
      alert("no editor selected");
    } else {
      alert(editorRef.current.getValue());
    }
  };

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  const handleEditorOnChange: OnChange = (value, event) => {
    console.log("editor changed", value, event, fileName);
  };

  const file = files[fileName];

  return (
    <div>
      <button
        disabled={fileName === "script.js"}
        onClick={() => setFileName("script.js")}
      >
        script.js
      </button>
      <button
        disabled={fileName === "style.css"}
        onClick={() => setFileName("style.css")}
      >
        style.css
      </button>
      <button
        disabled={fileName === "index.html"}
        onClick={() => setFileName("index.html")}
      >
        index.html
      </button>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="80vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        onMount={handleEditorDidMount}
        // value={
        //   file.name === "index.js"
        //     ?
        //     : file.name === "index.html"
        //     ? htmlValue
        //     : cssValue
        // }
        onChange={handleEditorOnChange}
      />
      <div>
        <Preview />
      </div>
    </div>
  );
}
