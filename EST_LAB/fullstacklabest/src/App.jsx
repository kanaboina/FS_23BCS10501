import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function SayHello({ name = "Guest" }) {
  return (
    <>
      <h1>Welcome, {name.length ? name : "Guest"}</h1>
    </>
  );
}

function App() {
  return (
    <>
      <div id="div">
        <SayHello name={prompt("Enter your name")} />
      </div>
    </>
  );
}

export default App;
