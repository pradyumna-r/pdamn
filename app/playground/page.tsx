import dynamic from "next/dynamic";
const Terminal = dynamic(() => import("@/app/components/Terminal"), {
  ssr: false,
});
// import ResizablePanels from "../components/ResizablePanels";
// const Preview = dynamic(() => import("@/app/components/Preview"), {
//   ssr: false,
// });
import EditorComponent from "../components/Editor";
const ResizablePanels = dynamic(
  () => import("@/app/components//ResizablePanels"),
  {
    ssr: false,
  }
);

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
      <ResizablePanels defaultLayout={[33, 67]} />
      {/* <div className="flex ">
        <div>
          <EditorComponent />
        </div>
      </div>
      
      <Terminal />*/}
    </div>
  );
}
