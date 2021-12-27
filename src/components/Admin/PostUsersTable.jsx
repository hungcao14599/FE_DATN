import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import React, { useState } from "react";
import styled from "styled-components";

export default function PostUsersTable({ data, totalElements }) {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",

    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Avatar",
      dataIndex: "avatarCreator",
      key: "avatarCreator",
    },
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
      ...getColumnSearchProps("creator"),
    },

    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "File",
      dataIndex: "file",
      key: "file",
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
      sorter: (a, b) => a.comment - b.comment,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Like",
      dataIndex: "like",
      key: "like",
      sorter: (a, b) => a.like - b.like,
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button>Remove</Button>
        </Space>
      ),
    },
  ];
  return (
    <WrapperCol1>
      <Table
        columns={columns}
        dataSource={data}
        // onChange={this.handleChange}
        pagination={{
          defaultCurrent: 1,
          total: totalElements,
          pageSize: 6,
          // itemRender:
          //   paginationType === "renderItem" ? renderItem : renderItemButton,
          // showSizeChanger: false,
          responsive: true,
        }}
      />
    </WrapperCol1>
  );
}

const WrapperCol1 = styled.div``;
