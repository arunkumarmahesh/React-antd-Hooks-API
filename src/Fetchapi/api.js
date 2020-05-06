import React, { useState, useEffect } from "react";
//import { Table } from "antd";

const Hooks = () => {
  const [setErrors] = useState(false);
  const [Hooks, settodos] = useState({});

  async function fetchData() {
    const res = await fetch("https://api.fda.gov/drug/event.json?limit=10");
    res
      .json()
      .then((res) => settodos(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  // const columns = [
  //   {
  //     title: "userId",
  //     dataIndex: "userId",
  //     key: "userId",

  //     width: "15%",

  //     sorter: (a, b) => a.userId.length - b.userId.length,

  //     ellipsis: true,
  //   },
  //   {
  //     title: "id",
  //     dataIndex: "id",
  //     key: "id",

  //     width: "15%",

  //     sorter: (a, b) => a.id.length - b.id.length,

  //     ellipsis: true,
  //   },

  //   {
  //     title: "title",
  //     dataIndex: "title",
  //     key: "title",

  //     width: "15%",

  //     sorter: (a, b) => a.title.length - b.title.length,

  //     ellipsis: true,
  //   },
  //   {
  //     title: "completed",
  //     dataIndex: "completed",
  //     key: "completed",
  //     filters: [
  //       { text: "false", value: "false" },
  //       { text: "true", value: "true" },
  //     ],
  //     width: "15%",

  //     sorter: (a, b) => a.completed.length - b.completed.length,

  //     ellipsis: true,
  //   },
  // ];

  return (
    <div>
      <div className="table">
        <h2> Users </h2>
      </div>
      <span>{JSON.stringify(Hooks)}</span>
    </div>
  );
};

export default Hooks;
