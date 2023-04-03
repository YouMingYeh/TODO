import Item from "./Item";
const List = ({ listData, setData, setCnt }) => {
  //   console.log("!")
  const hide = {
    display: "none",
  };
  const show = {
    display: "flex",
  };
  return (
    <ul className="todo-app__list" id="todo__list">
      {listData.map((item) => {
        const { id, note } = item;
        if (!item.showed) {
          return (
            <Item
              style={hide}
              key={id}
              id={id}
              note={note}
              setData={setData}
              listData={listData}
              setCnt={setCnt}
            />
          );
        } else {
          return (
            <Item
              style={show}
              key={id}
              id={id}
              note={note}
              setData={setData}
              listData={listData}
              setCnt={setCnt}
            />
          );
        }
      })}
    </ul>
  );
};

export default List;
