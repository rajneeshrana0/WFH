import React, { useState } from "react";
import "./RegisteredUser.css";

function RegisteredUser() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Tarun ",
      userType: "Student",
      photo:
        "https://portfolio-six-phi-17.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frajneesh.914ed7ad.png&w=384&q=95",
    },
    {
      id: 2,
      username: "Rajneesh Rana",
      userType: "emplooye",
      photo:
        "https://portfolio-six-phi-17.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frajneesh.914ed7ad.png&w=384&q=95",
    },
    {
      id: 3,
      username: "Divyanshu Shekahar",
      userType: "Sarpanch",
      photo:
        "https://portfolio-six-phi-17.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frajneesh.914ed7ad.png&w=384&q=95",
    },
    {
      id: 4,
      username: "Rajeev Kumar",
      userType: "Worker",
      photo:
        "https://portfolio-six-phi-17.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frajneesh.914ed7ad.png&w=384&q=95",
    },
    {
      id: 5,
      username: "Himanshu Gupta",
      userType: "Backend Developer",
      photo:
        "https://portfolio-six-phi-17.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frajneesh.914ed7ad.png&w=384&q=95",
    },
  ]);

  return (
    <div className="container">
      <h2>Registered Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>User Name </th>
            <th>User Type</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="user-info">
                  <img
                    src={user.photo}
                    alt={`${user.username}'s photo`}
                    className="user-photo"
                  />
                  <span className="username">{user.username}</span>
                </div>
              </td>
              <td>{user.userType}</td>
              <td>{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegisteredUser;
