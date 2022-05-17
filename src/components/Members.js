import axios from "axios";
import React, { useState, useEffect } from "react";

const URL = process.env.REACT_APP_PAGE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Members() {
  const [members, setMembers] = useState([]);
  const fetchData = async () => {
    await axios
      .get(URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then((response) => {
        console.log(response);
        let members = response.data;
        setMembers(members);
        console.log({ members });
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="member-container">
      <div className="member-columns">
        <ul>
          {members.map(({ ...members }, index) => (
            <li key={index}>
              {members.name}
              <br />
              Office: {members.office}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
