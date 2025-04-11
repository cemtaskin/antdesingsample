import { Input, Select, Space, Table, Tag } from "antd";
import Search from "antd/es/transfer/search";
import { use, useEffect, useState } from "react";

const StudentList = ({ students }) => {
  const { Search } = Input;
  const [filteredData, setFilteredData] = useState([...students]);
  const [department, setDepartment] = useState("0");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    search();
  }, [searchText, department]);
  const distinctDepartments = [
    ...new Set(students.map((item) => item.department)),
  ];

  const onDepartmentChange = (value) => {
    setDepartment(value);
  };

  const onSearch = (value) => {
    setSearchText(value);
  };

  const search = () => {
    const searchValue = searchText.toLowerCase();
    var data = [];
    if (department === "0") {
      data = students.filter(
        (item) =>
          item.number.toLowerCase().includes(searchValue) ||
          item.name.toLowerCase().includes(searchValue) ||
          item.surname.toLowerCase().includes(searchValue)
      );
    } else {
      data = students.filter(
        (item) =>
          item.department === department &&
          (item.number.toLowerCase().includes(searchValue) ||
            item.name.toLowerCase().includes(searchValue) ||
            item.surname.toLowerCase().includes(searchValue))
      );
    }

    console.log(data);
    setFilteredData(data);
  };

  console.log(distinctDepartments);
  const getTitle = () => {
    return (
      <Space>
        Filter
        <Search
          placeholder="Filter by number or name"
          allowClear
          style={{ width: 250 }}
          enterButton="Search"
          onSearch={onSearch}
        ></Search>
        Department
        <Select style={{ width: 150 }} onChange={onDepartmentChange}>
          <Select.Option value="0">All Departments</Select.Option>
          {distinctDepartments.map((item) => (
            <Select.Option value={item}>{item}</Select.Option>
          ))}
        </Select>
        Student List : <Tag color="blue">{filteredData.length}</Tag>
      </Space>
    );
  };

  const columns = [
    { title: "Student Number", dataIndex: "number" },
    { title: "Student Name", dataIndex: "name" },
    { title: "Student Surname", dataIndex: "surname" },
    { title: "Department", dataIndex: "department" },
  ];

  return (
    <Table title={getTitle} dataSource={filteredData} columns={columns}></Table>
  );
};

export default StudentList;
