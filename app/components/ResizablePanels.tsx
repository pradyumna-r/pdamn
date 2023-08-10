"use client";
import dynamic from "next/dynamic";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
const Terminal = dynamic(() => import("@/app/components/Terminal"), {
  ssr: false,
});
const Preview = dynamic(() => import("@/app/components/Preview"), {
  ssr: false,
});
import EditorComponent from "../components/Editor";
export default function ResizablePanels({
  defaultLayout = [30, 70],
}: {
  defaultLayout: number[] | undefined;
}) {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <div className="h-full">
      <PanelGroup direction="horizontal" onLayout={onLayout}>
        <Panel defaultSize={defaultLayout[1]}>
          <EditorComponent />
        </Panel>
        <PanelResizeHandle className="w-2 bg-blue-800" />
        <Panel defaultSize={defaultLayout[0]}>
          <Terminal />
        </Panel>
      </PanelGroup>
    </div>
    // <PanelGroup direction="horizontal" onLayout={onLayout}>
    //   <Panel>left</Panel>
    //   <PanelResizeHandle />
    //   <Panel defaultSize={defaultLayout[0]}>
    //     <PanelGroup direction="vertical">
    //       <Panel defaultSize={defaultLayout[0]}>
    //         <Terminal />
    //       </Panel>
    //       <PanelResizeHandle />
    //       <Panel>
    //         <PanelGroup direction="horizontal">
    //           <Panel>left</Panel>
    //           <PanelResizeHandle />
    //           <Panel>right</Panel>
    //         </PanelGroup>
    //       </Panel>
    //     </PanelGroup>
    //   </Panel>
    //   <PanelResizeHandle />
    //   <Panel>right</Panel>
    // </PanelGroup>
  );
}
