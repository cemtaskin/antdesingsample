import { LoginOutlined } from "@ant-design/icons";
import { Button, DatePicker, Space, Watermark } from "antd";
import StudentList from "./components/student_list";

function App() {
  const students = [
    { name: "Ali", surname: "Duru", number: "10120048458", department: "CE" },
    { name: "Aliye", surname: "Duru", number: "10120048452", department: "CE" },
    {
      name: "Ahmet",
      surname: "Durmaz",
      number: "10120048455",
      department: "CE",
    },
    {
      name: "Fatma",
      surname: "Çalışkan",
      number: "10120048451",
      department: "CE",
    },
    {
      name: "ME ABC",
      surname: "ME BC",
      number: "10220048458",
      department: "ME",
    },
    {
      name: "ME XYZ",
      surname: "ME XYZ",
      number: "10220048452",
      department: "ME",
    },
    {
      name: "ME AAA",
      surname: "ME AAA",
      number: "10220048455",
      department: "ME",
    },
    {
      name: "ME BBB",
      surname: "ME BBB",
      number: "10220048451",
      department: "ME",
    },
    {
      name: "FE 001",
      surname: "FE ABC",
      number: "10222048451",
      department: "FE",
    },
  ];
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <StudentList students={students} />
    </div>
  );
}

export default App;
