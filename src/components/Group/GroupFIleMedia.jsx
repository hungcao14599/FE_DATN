import {
  FileExcelOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  HistoryOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Row, Table, Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatDateOfBirth } from "../../utils/formatDateOfBirth";

const Wrapper = styled.div`
  background: white;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
  padding: 20px;
  min-width: 300px;
  margin-bottom: 30px;
`;
const Header = styled.div`
  border-bottom: 1px solid #ebedf3;
  padding-bottom: 10px;
`;
const Title = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;

const Body = styled.div``;

export default function GroupFileMedia({ files }) {
  console.log(
    "🚀 ~ file: GroupFIleMedia.jsx ~ line 38 ~ GroupFileMedia ~ files",
    files
  );
  const { TabPane } = Tabs;

  const callback = (key) => {
    console.log(key);
  };
  const URL_POSTS = "http://localhost:3000/api/posts/image";
  const URL_FILE = "http://localhost:3000/image/post";

  const columns = [
    {
      title: "File Name",
      dataIndex: "file",
      key: 1,
    },
    {
      title: "Type File",
      dataIndex: "type",
      key: 2,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: 3,
    },
  ];

  const data = files.map((item, i) => {
    return {
      key: i,
      file:
        item.name.split(".").pop() === "pdf" ? (
          <FileShare>
            <FilePdfOutlined style={{ color: "#ca0533" }} />
            <a
              href={`${URL_FILE}/${item.name}`}
              target={"_blank"}
              rel="noreferrer"
            >
              {item.name}
            </a>
          </FileShare>
        ) : item.name.split(".").pop() === "docx" ? (
          <FileShare>
            <FileWordOutlined style={{ color: "#103D8F" }} />
            <a
              href={`${URL_FILE}/${item.name}`}
              target={"_blank"}
              rel="noreferrer"
            >
              {item.name}
            </a>
          </FileShare>
        ) : item.name.split(".").pop() === "xlsx" ? (
          <FileShare>
            <FileExcelOutlined style={{ color: "#207245" }} />
            <a
              href={`${URL_FILE}/${item.name}`}
              target={"_blank"}
              rel="noreferrer"
            >
              {item.name}
            </a>
          </FileShare>
        ) : (
          ""
        ),
      type:
        item.name.split(".").pop() === "pdf"
          ? "PDF"
          : item.name.split(".").pop() === "docx"
          ? "DOCS"
          : item.name.split(".").pop() === "xlsx"
          ? "EXCEL"
          : "",
      createdAt: formatDateOfBirth(item.createdAt.slice(0, 10)),
    };
  });
  console.log("🚀 ~ file: GroupFIleMedia.jsx ~ line 110 ~ data ~ data", data);

  return (
    <Wrapper>
      <Header>
        <Title>FIle Media</Title>
      </Header>
      <Body>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Images" key="1">
            <Row>
              {files.map((item, i) => {
                if (item.name.split(".").pop() === "jpg") {
                  return (
                    <Col>
                      <Img src={`${URL_POSTS}/${item.name}`} alt="" />
                    </Col>
                  );
                }
              })}
            </Row>
          </TabPane>
          <TabPane tab="File Share" key="2">
            <Table dataSource={data} columns={columns} />;
          </TabPane>
        </Tabs>
      </Body>
    </Wrapper>
  );
}

const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  padding: 5px;
  object-fit: cover;
`;
const FileShare = styled.div`
  background: #f0f2f5;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ebedf3;
  margin-bottom: 10px;
  span {
    padding: 0 10px;
  }
  a {
    color: #000;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;
