import { ExclamationCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchAllPostByGroupId, removePost } from "../../actions/post";
import { useParams } from "react-router-dom";

export default function ManagePosts({ data, totalElements }) {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const params = useParams();
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
  const [isRemove, setIsRemove] = useState(false);
  const dispatch = useDispatch();
  const { confirm } = Modal;
  const handleOk = (id) => {
    dispatch(removePost(id)).then(() => {
      dispatch(
        fetchAllPostByGroupId({
          groupID: params.id,
          size: 20,
          page: 1,
        })
      );
    });
  };

  const handleCancel = () => {
    setIsRemove(false);
  };

  const showRemoveConfirm = (id) => {
    confirm({
      title: "Are you sure remove this post?",
      icon: <ExclamationCircleOutlined />,
      content: `Remove post: ${id}`,
      okText: "Yes",
      okType: "danger",
      // cancelText: "No",
      onOk: () => handleOk(id),
      onCancel: handleCancel,
      visible: isRemove,
    });
  };

  const handleRemovePost = (id) => {
    showRemoveConfirm(id);
  };

  const expandedRowRender = (data) => {
    const columns = [
      { title: "Index", dataIndex: "key", key: "key" },
      { title: "Post ID", dataIndex: "postID", key: "postID" },
      { title: "File Media", dataIndex: "files", key: "files" },
    ];
    const subData = [
      {
        key: data.key,
        postID: data.postID,
        files: data.file,
      },
    ];
    return <Table columns={columns} dataSource={subData} pagination={false} />;
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
          <ButtonControl onClick={() => handleRemovePost(record.postID)}>
            Remove
          </ButtonControl>
        </Space>
      ),
    },
  ];
  return (
    <WrapperCol1>
      <Table
        className="components-table-demo-nested"
        expandable={{ expandedRowRender }}
        columns={columns}
        dataSource={data}
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
const ButtonControl = styled(Button)`
  color: #ca0533;
  font-weight: 500;
  display: flex;
  display: flex;
  align-items: center;
  border: none;

  span {
    margin: 0 auto;
    font-size: 13px;
  }
  :hover,
  :active,
  :focus {
    color: #ca0533;
  }
`;
