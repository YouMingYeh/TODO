import { useEffect, useState } from "react";

import itemID from "./itemID";

const AddItem = (props) => {
  const [note, setNote] = useState("");
  function noteChange(elem) {
    // console.log("!!!");
    setNote(elem.target.value);
  }

  function addItem() {
    // setNote(0)
    let itsID = itemID();
    props.add(function (prevData) {
      return [
        ...prevData,
        {
          id: itsID,
          note,
          deleted: false,
          checked: false,
          showed: true,
        },
        
      ];
    });
  }

  const handleKeyDown = (key) => {
    // console.log(key)
    if (key.key === "Enter") {
      //   console.log("enter hitted!");
      key.target.value = "";
      addItem();
    }
  };

  return (
    <input
      type="text"
      className="todo-app__input"
      placeholder="What needs to be done?"
      //   defaultValue={note}
      onChange={noteChange}
      onKeyPress={handleKeyDown}
    ></input>
  );
};

export default AddItem;
