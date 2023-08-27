import React, { useEffect, useState } from "react";

function ApiDisplay() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://pnintership.onrender.com/api/getAllCertificate")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        //console.log(users);
        let data1 = users.data;
        console.log(data1);
        setUser(data1);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container mt-5">
      <table className="table  table-success table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.studentName}</td>
              <td>{item.courseName}</td>
              <td>{item.courseDuration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default ApiDisplay;