"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const Terminal = dynamic(() => import("@/app/components/Terminal"), {
  ssr: false,
});
// const Preview = dynamic(() => import("@/app/components/Preview"), {
//   ssr: false,
// });
import EditorComponent from "../components/Editor";

export default function Page() {
  // const [jsValue, setJsValue] = useState("console.log('hello world')");
  // const [htmlValue, setHtmlValue] = useState("h1{color:red;}");
  // const [cssValue, setCssValue] = useState("<h1>hello world</h1>");
  // function handleUserEdit(fileName: string, value: string) {
  //   if (fileName === "script.js") {
  //     setJsValue(value);
  //   }
  // }
  // console.log("this is js value", jsValue);
  return (
    <div>
      <div className="flex ">
        {/* <p>{jsValue}</p> */}
        <div>
          <EditorComponent />
        </div>
        {/* <div>
          <Preview />
        </div> */}
      </div>
      <Terminal />
    </div>
  );
}
