"use client";
export default function Preview() {
  return (
    <>
      <iframe
        srcDoc="<html><h1>hello world</h1>
        <p id='time'>0</p>
        <button onclick='handleClick()'>
click me
</button>
        <style>
        h1 {color:red;}
      </style>
      <script>

      function handleClick(){
      document.getElementById('time').innerHTML='click'
      }</script>"
        width="100%"
        height="100%"
      ></iframe>
    </>
  );
}
