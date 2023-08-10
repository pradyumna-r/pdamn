"use client";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Editor, { OnMount, OnChange } from "@monaco-editor/react";
import { type editor } from "monaco-editor";
const Preview = dynamic(() => import("@/app/components/Preview"), {
  ssr: false,
});
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Button } from "./ui/Button";
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
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  const handleEditorOnChange: OnChange = (value, event) => {
    console.log("editor changed", value, event, fileName);
    if (fileName === "script.js") {
      setJsValue(value!);
    }
    if (fileName === "index.html") {
      setHtmlValue(value!);
    }
    if (fileName === "style.css") {
      setCssValue(value!);
    }
  };

  const file = files[fileName];

  return (
    <div>
      <PanelGroup direction="horizontal">
        <Panel defaultSize={40}>
          <div className="mt-4 ">
            {/* <Button>Button</Button> */}
            <div className="flex mb-3 w-full">
              <button
                disabled={fileName === "script.js"}
                onClick={() => setFileName("script.js")}
                className="mr-1 bg-blue-500 flex-grow-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                script.js
              </button>
              <button
                disabled={fileName === "style.css"}
                onClick={() => setFileName("style.css")}
                className="mr-1 bg-blue-500 flex-grow-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                style.css
              </button>
              <button
                disabled={fileName === "index.html"}
                onClick={() => setFileName("index.html")}
                className="bg-blue-500 flex-grow-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                index.html
              </button>
            </div>
            {/* <button onClick={showValue}>Show value</button> */}
            <div>
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
            </div>
          </div>
        </Panel>
        <PanelResizeHandle className="w-2 bg-blue-800" />
        <Panel defaultSize={60}>
          <Preview
            jsValue={jsValue}
            htmlValue={htmlValue}
            cssValue={cssValue}
          />
        </Panel>
      </PanelGroup>
    </div>
    // <div>
    //   <button
    //     disabled={fileName === "script.js"}
    //     onClick={() => setFileName("script.js")}
    //   >
    //     script.js
    //   </button>
    //   <button
    //     disabled={fileName === "style.css"}
    //     onClick={() => setFileName("style.css")}
    //   >
    //     style.css
    //   </button>
    //   <button
    //     disabled={fileName === "index.html"}
    //     onClick={() => setFileName("index.html")}
    //   >
    //     index.html
    //   </button>
    //   <button onClick={showValue}>Show value</button>
    //   <Editor
    //     height="80vh"
    //     theme="vs-dark"
    //     path={file.name}
    //     defaultLanguage={file.language}
    //     defaultValue={file.value}
    //     onMount={handleEditorDidMount}
    //     // value={
    //     //   file.name === "index.js"
    //     //     ?
    //     //     : file.name === "index.html"
    //     //     ? htmlValue
    //     //     : cssValue
    //     // }
    //     onChange={handleEditorOnChange}
    //   />
    //   <div>
    //     <Preview jsValue={jsValue} htmlValue={htmlValue} cssValue={cssValue} />
    //   </div>
    // </div>
  );
}
