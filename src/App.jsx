import { LoginOutlined } from "@ant-design/icons";
import { Button, DatePicker, Space, Watermark } from "antd";
import StudentList from "./components/student_list";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("url")
      .then((res) => {
        setStudents(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch students:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {!loading && <StudentList students={students} />}
    </div>
  );
}

export default App;
