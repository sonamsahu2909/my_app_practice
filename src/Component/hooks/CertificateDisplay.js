import React, { useEffect, useState } from "react";

function CertificateDisplay() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://ecommerceapi-d3ul.onrender.com/api/getalluser")
      .then((response) => response.json())
      .then((json) => setData(json.getalluser));
      // .then((json) => console.log(json.data));
  }, []);
  

  return (
    <>
      <div className="container mt-5">
        <table className="table  table-success table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CertificateDisplay;
