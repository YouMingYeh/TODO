import { useEffect, useState } from "react";
import "./Footer.css";

const Footer = ({ data, setData, cnt }) => {
  const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    cnt = 0;

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      if (!data[i].checked && !data[i].deleted) {
        cnt++;
      }
    }

    setRemaining(cnt);
  }, [data]);
  // console.log('remaining')

  function handleAll() {
    setData((prev) => {
      const newData = [];
      for (let i = 0; i < prev.length; i++) {
        const curr = prev[i];
        const update = {
          ...curr,
          showed: true,
        };

        newData.push(update);
      }
      return newData;
    });
  }

  function handleActive() {
    setData((prev) => {
      const newData = [];
      for (let i = 0; i < prev.length; i++) {
        const curr = prev[i];
        if (!curr.checked) {
          const update = {
            ...curr,
            showed: true,
          };
          newData.push(update);
        } else {
          const update = {
            ...curr,
            showed: false,
          };
          newData.push(update);
        }
      }
      return newData;
    });
  }

  function handleCompleted() {
    setData((prev) => {
      const newData = [];
      for (let i = 0; i < prev.length; i++) {
        const curr = prev[i];
        if (curr.checked) {
          const update = {
            ...curr,
            showed: true,
          };
          newData.push(update);
        } else {
          const update = {
            ...curr,
            showed: false,
          };
          newData.push(update);
        }
      }
      return newData;
    });
  }
  function handleClean() {
    setData((prev) => {
      const newData = [];
      for (let i = 0; i < prev.length; i++) {
        const curr = prev[i];
        if (curr.checked) {
          const update = {
            ...curr,
            deleted: true,
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
    setData(function (prev) {
      return prev.filter((item) => {
        return item.deleted !== true;
      });
    });
  }

  // console.log(cnt)
  // data.forEach(elem => {
  //   cnt
  // });
  return (
    <div className="todo-app__footer " id="todo-footer">
      <div className="todo-app__total">{remaining} Left</div>
      <ul className="todo-app__view-buttons">
        <button onClick={handleAll}>All</button>
        <button onClick={handleActive}>Active</button>
        <button onClick={handleCompleted}>Completed</button>
      </ul>
      <div className="todo-app__clean">
        <button onClick={handleClean}>Clear Completed</button>
      </div>
    </div>
  );
};

export default Footer;
