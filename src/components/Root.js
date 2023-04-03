import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./Root.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Root() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  // consol

  return (
    <div className="todo-app__root">
      <Header />
      <Content data={data} setData={setData} setCnt={setCounter} />
      {data.length >0 ?  <Footer data={data} setData={setData} cnt={counter} /> : <div></div>}
    </div>
  );
}
