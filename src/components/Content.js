import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import "./Content.css";
import List from "./List";

const Content = ({ data, setData, setCnt }) => {
  // console.log("./x.png")

  console.log(data);
  return (
    <section className="todo-app__main">
      <AddItem add={setData} setCnt={setCnt} />
      <List listData={data} setData={setData} setCnt={setCnt} />
    </section>
  );
};

export default Content;
