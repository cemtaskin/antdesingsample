import { Select, Space, Table, Tag } from "antd";

const StudentList = ({ students }) => {
  console.log(students);
  const getTitle = () => {
    return (
      <Space>
        <Select style={{ width: 150 }}>
          <Select.Option>CE</Select.Option>
        </Select>
        Student List : <Tag color="blue">{students.length}</Tag>
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
    <Table title={getTitle} dataSource={students} columns={columns}></Table>
  );
};

export default StudentList;
