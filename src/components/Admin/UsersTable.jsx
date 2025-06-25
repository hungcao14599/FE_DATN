import { ExclamationCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  fetchAllUsers,
  setBlockUser,
  setUnBlockUser,
} from "../../actions/user";

export default function UsersTable({ data, totalElements }) {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [isBlockModal, setIsBlockModal] = useState(false);
  const [isUnBlockModal, setIsUnBlockModal] = useState(false);

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

  const dispatch = useDispatch();

  const { confirm } = Modal;
  const handleOk = (id) => {
    dispatch(setBlockUser(id)).then((res) => {
      dispatch(fetchAllUsers());
    });
  };

  const handleOkUnblock = (id) => {
    dispatch(setUnBlockUser(id)).then((res) => {
      dispatch(fetchAllUsers());
    });
  };

  const handleCancel = () => {
    setIsBlockModal(false);
    setIsUnBlockModal(false);
  };

  const showBlockConfirm = (id) => {
    confirm({
      title: "Are you sure block this user?",
      icon: <ExclamationCircleOutlined />,
      content: `Block: ${id}`,
      okText: "Yes",
      okType: "danger",
      // cancelText: "No",
      onOk: () => handleOk(id),
      onCancel: handleCancel,
      visible: isBlockModal,
    });
  };

  const showUnBlockConfirm = (id) => {
    confirm({
      title: "Are you sure unblock this user?",
      icon: <ExclamationCircleOutlined />,
      content: `Unblock: ${id}`,
      okText: "Yes",
      okType: "primary",
      // cancelText: "No",
      onOk: () => handleOkUnblock(id),
      onCancel: handleCancel,
      visible: isUnBlockModal,
    });
  };

  const handleBlock = (id) => {
    showBlockConfirm(id);
  };

  const handleUnBlock = (id) => {
    showUnBlockConfirm(id);
  };

  const columns = [
    // {
    //   title: "Key",
    //   dataIndex: "key",
    //   key: "key",
    // },
    {
      title: "UserID",
      dataIndex: "userID",
      key: "userID",
      ...getColumnSearchProps("userID"),
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      ...getColumnSearchProps("username"),
      sorter: (a, b) => a.username.length - b.username.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Fullname",
      dataIndex: "fullname",
      key: "fullname",
      ...getColumnSearchProps("fullname"),
      sorter: (a, b) => a.fullname.length - b.fullname.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <ButtonControl
            onClick={() => handleBlock(record.userID)}
            disabled={record?.status === 3 ? true : false}
          >
            Block
          </ButtonControl>
          <ButtonControl
            onClick={() => handleUnBlock(record.userID)}
            disabled={record?.status === 1 ? true : false}
          >
            UnBlock
          </ButtonControl>
        </Space>
      ),
    },
  ];

  // const expandedRowRender = (user) => {

  //   const columns = [
  //     { title: "Index", dataIndex: "date", key: "date" },
  //     { title: "Group Name", dataIndex: "date", key: "date" },
  //     { title: "Group Description", dataIndex: "name", key: "name" },
  //     {
  //       title: "Admin",
  //       key: "state",
  //       render: () => (
  //         <span>
  //           <Badge status="success" />
  //           Finished
  //         </span>
  //       ),
  //     },

  //     {
  //       title: "Action",
  //       dataIndex: "operation",
  //       key: "operation",
  //       render: () => (
  //         <Space size="middle">
  //           <a>Pause</a>
  //           <a>Stop</a>
  //         </Space>
  //       ),
  //     },
  //   ];

  //   // useEffect(() => {
  //   //   dispatch(fetchGroupById(user.userID));
  //   // }, [user.userID]);

  //   const data = [];
  //   for (let i = 0; i < 3; ++i) {
  //     data.push({
  //       key: i,
  //       date: "2014-12-24 23:12:00",
  //       name: "This is production name",
  //       upgradeNum: "Upgraded: 56",
  //     });
  //   }
  //   return <Table columns={columns} dataSource={data} pagination={false} />;
  // };

  return (
    <WrapperCol1>
      <Table
        // className="components-table-demo-nested"
        // expandable={{ expandedRowRender }}
        columns={columns}
        dataSource={data}
        pagination={{
          defaultCurrent: 1,
          total: totalElements,
          pageSize: 6,
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
