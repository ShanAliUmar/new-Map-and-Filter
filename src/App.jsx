import { useState } from "react";
import Search from "./Search";
import './App.css'

const App = () => {
  const [name, setName] = useState("")
  console.log(name)
  return (
    <>
      <Search/>
    </>
  );
};

export default App 