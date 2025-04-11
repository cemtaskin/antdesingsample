import { Select, Space, Table, Tag } from "antd";

const StudentList = ({ students }) => {
  const distinctDepartments = [
    ...new Set(students.map((item) => item.department)),
  ];

  console.log(distinctDepartments);
  const getTitle = () => {
    return (
      <Space>
        Department
        <Select style={{ width: 150 }}>
          <Select.Option value="0">All Departments</Select.Option>
          {distinctDepartments.map((item) => (
            <Select.Option value={item}>{item}</Select.Option>
          ))}
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
