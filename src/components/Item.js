import { useEffect } from "react";

const Item = ({ id, note, setData, listData, setCnt, style }) => {
  function handleChangeState(item_id) {
    console.log("state changed!");
    setData((prev) => {
      const newData = [];
      for (let i = 0; i < prev.length; i++) {
        const curr = prev[i];
        if (item_id === curr.id) {
          const update = {
            ...curr,
            checked: !curr.checked,
          };
          newData.push(update);
        } else {
          const update = {
            ...curr,
          };
          newData.push(update);
        }
      }
      return newData;
    });
  }

  function deleteItem() {
    setData(function (prev) {
      return prev.filter((item) => {
        if (item.id === id) item.deleted = true;
        return item.id !== id;
      });
    });
  }
  var lineThrough = { textDecoration: "auto" };
  //   console.log(lineThrough)
  for (let i = 0; i < listData.length; i++) {
    if (listData[i].id == id && listData[i].checked) {
      lineThrough = {
        textDecoration: "line-through",
        opacity: "0.5",
      };
    }
  }

  return (
    <li style={style} className="todo-app__item">
      <div className="todo-app__checkbox">
        <input
          type="checkbox"
          id={id}
          onClick={() => handleChangeState(id)}
        ></input>
        <label htmlFor={id}></label>
      </div>
      <h1 style={lineThrough} className="todo-app__item-detail">
        {note}
      </h1>
      <img
        src={require("./x.png")}
        className="todo-app__item-x"
        onClick={deleteItem}
      ></img>
    </li>
  );
};

export default Item;
