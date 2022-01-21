import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import styled from "styled-components";
import { Button } from "antd";
import { FileExcelOutlined } from "@ant-design/icons";

const ButtonExcel = styled.div`
  display: flex;
  justify-content: end;
  button {
    background: #ca0533;
    height: 100%;
    border-radius: 10px;
    padding: 8px 15px;
    margin-bottom: 20px;
    span {
      color: #fff;
    }
    :hover,
    :active,
    :focus {
      background: #ca0533;
    }
  }
`;

export default function ExportCSV({ csvData, fileName }) {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <ButtonExcel>
      <Button
        onClick={(e) => exportToCSV(csvData, fileName)}
        icon={<FileExcelOutlined />}
      >
        Excel Download
      </Button>
    </ButtonExcel>
  );
}
