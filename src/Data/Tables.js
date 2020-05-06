import React from "react";
import { Table, Button } from "antd";
import "./Get.css";

class Get extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      filteredInfo: "",
      sortedInfo: "",
    };
  }

  componentDidMount() {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos";

    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: "" });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: "",
      sortedInfo: "",
    });
  };

  setDateSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "id",
      },
    });
  };

  render() {
    let { error, users, sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const columns = [
      {
        title: "userId",
        dataIndex: "userId",
        key: "userId",
        filters: [
          { text: "1", value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
          { text: "5", value: 5 },
          { text: "6", value: 6 },
          { text: "7", value: 7 },
          { text: "8", value: 8 },
          { text: "9", value: 9 },
          { text: "10", value: 10 },
        ],
        width: "15%",
        //filteredValue: filteredInfo.userId ,
        //onFilter: (value, record) => record.userId.includes(value),
        sorter: (a, b) => a.userId.length - b.userId.length,
        sortOrder: sortedInfo.columnKey === "userId" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "id",
        dataIndex: "id",
        key: "id",

        width: "15%",

        sorter: (a, b) => a.id.length - b.id.length,
        sortOrder: sortedInfo.columnKey === "id" && sortedInfo.order,
        ellipsis: true,
      },

      {
        title: "title",
        dataIndex: "title",
        key: "title",

        width: "15%",

        sorter: (a, b) => a.title.length - b.title.length,
        sortOrder: sortedInfo.columnKey === "title" && sortedInfo.order,
        ellipsis: true,
      },
    ];

    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <div className="table">
            <h2> Users List </h2>
            <Button onClick={this.setDateSort}>Sort Users</Button>
            <Button onClick={this.clearFilters}>Clear filters</Button>
            <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          </div>
          <Table
            columns={columns}
            dataSource={users}
            onChange={this.handleChange}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 380 }}
          />
        </div>
      );
    }
  }
}

export default Get;
