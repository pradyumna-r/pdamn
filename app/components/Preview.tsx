"use client";

interface Props {
  jsValue: string;
  htmlValue: string;
  cssValue: string;
}

export default function Preview({ jsValue, htmlValue, cssValue }: Props) {
  let codeValue = `${htmlValue}<style>${cssValue}</style><script>${jsValue}</script>`;
  return (
    <>
      <iframe
        //         srcDoc="<html><h1>hello world</h1>
        //         <p id='time'>0</p>
        //         <button onclick='handleClick()'>
        // click me
        // </button>
        //         <style>
        //         h1 {color:red;}
        //       </style>
        //       <script>

        //       function handleClick(){
        //       document.getElementById('time').innerHTML='click'
        //       }</script>"
        srcDoc={codeValue}
        width="100%"
        height="100%"
      ></iframe>
    </>
  );
}
